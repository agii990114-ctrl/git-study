from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from urllib.parse import unquote
from pydantic import BaseModel,Field
from jose import JWTError, jwt
from datetime import datetime, timedelta, timezone
import uuid

origins = [
    "http://localhost:5173"
]


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class loginModel(BaseModel):
    email : str = Field(..., title="이메일 주소", description="로그인를 위한 이메일 주소 입니다.")
    pwd : str = Field(..., title="비밀번호", description="로그인를 위한 비밀번호 입니다.")

SECRET_KEY = "your-extremely-secure-random-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
def set_token(no: int, name: str):
  try:
    iat = datetime.now(timezone.utc) + (timedelta(hours=7))
    exp = iat + (timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    data = {
      "name": name,
      "iss": "EDU", 
      "sub": str(no), 
      "iat": iat,
      "exp": exp
    }
    
    token = jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)
    sql = f"INSERT INTO edu.`login` (`id`, `userNo`, `token`) VALUE ('{id}', {no}, '{token}')"
    if save(sql): return id
  except JWTError as e:
    print(f"JWT ERROR : {e}")
  return None

@app.get('/')
def root():
    return('hi')


@app.post('/basket')
def basket(req : Request):
    basketCk = req.cookies.get("basket")
    decodeBasket = unquote(basketCk)
    return {"status": True, "basket": decodeBasket}


@app.post('/login')
def login(loginModel: loginModel, res : Response ):
    id = uuid.uuid4().hex
    res.set_cookie(
       key='user',
       value = id,
       max_age=60 * 60,
        expires=60 * 60,
        path="/",
        domain="localhost",
        secure=True,
        httponly=False,
        samesite="lax"
    )
    return {"status": True, "loginModel":loginModel}