import os
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Request
from fastapi.templating import Jinja2Templates

app = FastAPI()

# HTML 템플릿 파일이 있는 경로 설정
templates = Jinja2Templates(directory="templates")

# 1. 처음 접속 시 채팅 화면(HTML)을 보여주는 경로
@app.get("/")
async def get_chat_page(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# 2. 실제 웹소켓 통신이 이루어지는 경로
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()  # 클라이언트 연결 수락
    print("클라이언트가 연결되었습니다.")
    
    try:
        while True:
            # 클라이언트로부터 텍스트 메시지를 받음
            data = await websocket.receive_text()
            print(f"받은 메시지: {data}")
            
            # 받은 메시지를 다시 클라이언트에게 보냄 (에코)
            await websocket.send_text(f"서버 응답: {data}")
            
    except WebSocketDisconnect:
        print("클라이언트 연결이 종료되었습니다.")