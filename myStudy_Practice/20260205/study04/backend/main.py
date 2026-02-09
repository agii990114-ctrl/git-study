from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get('/',response_class= HTMLResponse)
def root():
    return "<h1>안녕하세용~~ 적당한 바람이 좋아용</h1>"