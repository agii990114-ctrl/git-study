from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Request
from fastapi.templating import Jinja2Templates
from typing import List

app = FastAPI()
templates = Jinja2Templates(directory="templates")

# 1. 접속 중인 모든 웹소켓 연결을 저장할 리스트


class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)  # 새로운 연결 추가

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)  # 연결 종료 시 삭제

    async def broadcast(self, message: str):
        # 연결된 모든 클라이언트에게 메시지 전송
        for connection in self.active_connections:
            await connection.send_text(message)


manager = ConnectionManager()


@app.get("/")
async def get_chat_page(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            # 메시지를 보낸 사람 뿐만 아니라 모두에게 전송!
            await manager.broadcast(f"누군가: {data}")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.broadcast("한 명이 채팅방을 나갔습니다.")
