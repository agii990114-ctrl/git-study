from fastapi import FastAPI, Request, Response, Cookie
from settings import settings
from authlib.integrations.starlette_client import OAuth
from starlette.middleware.sessions import SessionMiddleware
import json
import httpx
import redis
import uuid


oauth = OAuth()

oauth.register(
  name='kakao',
  client_id=settings.client_id,
  client_secret=settings.client_secret,
  authorize_url="https://kauth.kakao.com/oauth/authorize",
  access_token_url="https://kauth.kakao.com/oauth/token",
  api_base_url="kapi.kakao.com",
  client_kwargs={
        "scope": "profile_nickname profile_image",
        "token_endpoint_auth_method": "client_secret_post", # 이 설정이 핵심입니다!
        'token_placement': 'header',
    }
)

redis_client1 = redis.Redis(
  host = settings.redis_host,
  port = settings.redis_port,
  db = settings.redis_access_db,
  decode_responses=True
)

redis_client2 = redis.Redis(
  host = settings.redis_host,
  port = settings.redis_port,
  db = settings.redis_refresh_db,
  decode_responses=True
)

async def getUserInfo(client, access_token: str):
  return await client.get(
    "https://kapi.kakao.com/v2/user/me",
    headers={"Authorization": f"Bearer {access_token}"}
  )

async def setUserLogout(client, access_token: str):
  return await client.get(
    "https://kapi.kakao.com/v1/user/logout",
    headers={"Authorization": f"Bearer {access_token}"}
  )


app = FastAPI(title=settings.title, root_path=settings.root_path)

app.add_middleware(
    SessionMiddleware, 
    secret_key="your-very-secret-key" # 실제 서비스 시에는 안전한 문자열을 사용하세요
)


@app.get("/")
def read_root():
  print(f"CLIENT_ID: {settings.client_id}")
  print(f"CLIENT_SECRET: {settings.client_secret}")
  return {"service": "App2"}


@app.get("/login/kakao")
async def kakaoLogin(request: Request):
  redirect_uri = settings.redirect_uri
  return await oauth.kakao.authorize_redirect(request, redirect_uri)



@app.get("/oauth/callback/kakao")
async def kakaoCallback(request: Request, response: Response):
  tokens = await oauth.kakao.authorize_access_token(request)
  access_token = tokens.get("access_token")
  exprie_in = tokens.get("expires_in")
  refresh_token = tokens.get("refresh_token")
  refresh_token_exprie_in = tokens.get("refresh_token_expires_in")

  id = uuid.uuid4().hex
  redis_client1.setex(id, exprie_in, access_token)
  redis_client2.setex(id, refresh_token_exprie_in, refresh_token)

  response.set_cookie(
        key="accept",      # 쿠키 이름
        value=id,      # 저장할 값
        httponly=True,           # JavaScript에서 접근 불가 (보안)
        max_age=int(exprie_in),            # 쿠키 유지 시간 (초 단위, 3600 = 1시간)
        expires=int(exprie_in),            # 만료 시간 (max_age와 유사)
        path="/",                # 쿠키가 유효한 경로
        domain=settings.dns,             # 특정 도메인에서만 유효하게 설정 시 사용
        secure=False,            # True 설정 시 HTTPS에서만 전송
        samesite="lax"           # CSRF 공격 방지 설정 ("lax", "strict", "none")
    )
  
  return {"status": True}



@app.get("/me")
async def me(accept: str = Cookie(default=None)):
  if accept:
    access_token = redis_client1.get(accept)
    async with httpx.AsyncClient() as client:
      userResponse = await getUserInfo(client, access_token)
      userInfo = userResponse.json()
      if userResponse.status_code == 200:
        user = {
          "id":userInfo.get("id"),
          "nickname":userInfo.get("properties")["nickname"],
          "profile_image":userInfo.get("properties")["profile_image"],
        }
      return {"status": True, "userInfo": user}
  return {"status": False}


@app.get("/logout")
async def logout( response : Response, request: Request, accept: str = Cookie(default=None)):
  if accept:
    access_token = redis_client1.get(accept)
    async with httpx.AsyncClient() as client:
      logoutResponse = await setUserLogout(client, access_token)
      print(logoutResponse.status_code)
      if logoutResponse.status_code == 200:
        redis_client1.delete(accept)
        redis_client2.delete(accept)
        for cookieName in request.cookies.keys():
          response.delete_cookie(
            key=cookieName,
            path="/",          # 생성 시 설정한 path와 일치해야 함
            domain=settings.dns,       # 생성 시 domain을 넣었다면 똑같이 넣어야 함
            httponly=False,     # 생성 시 httponly였다면 똑같이 넣는 것이 안전함
            samesite="lax"     # 생성 시 설정과 일치 권장
          )
          print(redis_client1.get(accept))
          print(redis_client2.get(accept))
        return {"status": True}
  return {"status": False}


