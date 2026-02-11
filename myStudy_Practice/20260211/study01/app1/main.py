from fastapi import FastAPI, File, UploadFile, Form 
from fastapi.responses import FileResponse
from pathlib import Path
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware
import shutil
import uuid
from db import save, findOne, findAll, getConn

class FileItem(BaseModel):
  filename: str
  content_type: str
  content_base64: str


class FileModel(BaseModel):
  text: str
  files: List[str]



origins = [
    "http://localhost","http://app2",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


UPLOAD_DIR = Path("uploads") #파일 저장할 위치
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "webp"} #파일 형식
MAX_FILE_SIZE = 10 * 1024 #파일 용량 제한

db = []

def checkDir():
  UPLOAD_DIR.mkdir(exist_ok=True)

def saveFile(file):
  checkDir()
  origin = file.filename
  ext = origin.split('.')[-1].lower()
  id = uuid.uuid4().hex
  newName = f"{id}.{ext}"
  # data = {"origin": origin, "ext":ext, "newName":newName, "id": id}
  sql = f'''
  INSERT INTO `edu`.file (`origin`,`ext`,`filename`,`contentType`) value ('{origin}','{ext}','{id}','{file.content_type}')
  '''
  save(sql)
  print(getConn())
  path =UPLOAD_DIR/newName
  with path.open("wb") as f:
    print(f)
    shutil.copyfileobj(file.file, f)

@app.get("/")
def root():
  return {"status": True}


@app.post('/upload')
def upload(files: List[UploadFile] = File(None) , text: str = Form('')):
  print(text)
  for file in files:
    saveFile(file)
  return {"status": True}

@app.post('/upload2')
def upload(model : FileModel):
  print(model.text)
  return {"status": True}

@app.get('/images')
def images():
  return {"status": True, "result": db}

@app.get('/download')
def download(id: int):
  sql = f'''
  SELECT `filename`,`origin` from `edu`.file where `no`={id}
  '''
  result = findOne(sql)
  print(result['filename'])

  # for row in db:
  #   if row["id"] == id:
  #     newName = row["newName"]
  #     origin = row["origin"]
  #     break
  # if newName:
  #   print(newName)
  #   path = UPLOAD_DIR / newName
  #   return FileResponse(path=path, filename=origin)

  # return FileResponse()
  return {"status": True}