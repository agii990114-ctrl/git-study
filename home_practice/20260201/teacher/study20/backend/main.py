from fastapi import FastAPI, Request, Cookie, HTTPException
from fastapi.middleware.cors import CORSMiddleware
# from settings import settings
import urllib.parse
import base64
import json
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad

def base64Decode(data):
  encoded = urllib.parse.unquote(data)
  return base64.b64decode(encoded).decode("utf-8")

origins = [ "http://localhost:5173" ]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
  return { "status": True }

# @app.post("/board")
# def board(request: Request):
#   boardNo = request.cookies.get("boardNo")
#   print(boardNo, base64Decode(boardNo))
#   boardNo = int(base64Decode(boardNo))
#   return {"boardNo": boardNo}

SECRET_KEY = "your-very-secret-key-123456789012".encode('utf-8')
SECRET_KEY = SECRET_KEY.ljust(32, b'\0')[:32]

def decrypt_cookie(encrypted_str: str):
    try:
        # 1. URL 디코딩 (브라우저가 변환한 %3D 등을 복구)
        unquoted = urllib.parse.unquote(encrypted_str)
        
        # 2. Base64 디코딩 (문자열 -> 바이트)
        raw_data = base64.b64decode(unquoted)
        
        # 3. IV(Initial Vector)와 실제 데이터 분리
        # CryptoJS는 보통 데이터 앞에 16바이트의 IV를 붙여서 보냅니다 (라이브러리 설정마다 다를 수 있음)
        # 만약 직접 IV를 관리한다면 그에 맞춰 수정이 필요합니다.
        iv = raw_data[:16]
        payload = raw_data[16:]
        
        # 4. AES 복호화 객체 생성 (CBC 모드 기준)
        cipher = AES.new(SECRET_KEY, AES.MODE_CBC, iv)
        
        # 5. 복호화 및 패딩 제거
        decrypted_bytes = unpad(cipher.decrypt(payload), AES.block_size)
        
        # 6. JSON 변환
        return json.loads(decrypted_bytes.decode('utf-8'))
    
    except Exception as e:
        print(f"복호화 에러: {e}")
        return None


# @app.post("/board")
# async def verify_user(req : Request):
#     boardNo = req.cookies.get("boardNo")
#     if not boardNo:
#         return {"error": "쿠키가 없습니다."}
    
#     try:
#         # 1. Base64 디코딩
#         decoded_bytes = base64.b64decode(boardNo)
#         decoded_str = decoded_bytes.decode('utf-8')
        
#         # 2. URL 디코딩 (한글 처리용)
#         final_json_str = urllib.parse.unquote(decoded_str)
        
#         # 3. JSON 파싱
#         user_data = json.loads(final_json_str)
        
#         return {"status": "success", "data": user_data}
#     except Exception as e:
#         return {"error": "복호화 실패", "detail": str(e)}

@app.post("/board")
async def get_user_from_cookie(user_info: str = Cookie(None)):
    if not user_info:
        return HTTPException(status_code=400, detail="쿠키가 존재하지 않습니다.")
    
    data = decrypt_cookie(user_info)
    
    if not data:
        return HTTPException(status_code=400, detail="유효하지 않은 쿠키 데이터입니다.")
        
    return {"user": data}
