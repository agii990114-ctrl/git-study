from fastapi import FastAPI
from kafka import KafkaProducer
from settings import settings
from pydantic import EmailStr, BaseModel
import json
import redis
from jose import jwt, JWTError
from datetime import datetime, timedelta, timezone
from db import findOne


app = FastAPI()


class EmailModel(BaseModel):
  email: EmailStr

SECRET_KEY="your-extremely-secure-random-secret-key"
ALGORITHM="HS256"   
ACCESS_TOKEN_EXPIRE_MINUTES = 60

def set_token(email):
    try:
        iat = datetime.now(timezone.utc) + (timedelta(hours=7))         # Claim설정
        exp = iat + (timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
        data = {
            "email": email,
            "iss": "EDU",
            # "sub": id ,
            "iat": iat,
            "exp": exp
        }

        return  jwt.encode(data, SECRET_KEY, ALGORITHM)
    except JWTError as e:
        print(f"JWT ERROR : {e}")
    return None


pd = KafkaProducer(
  bootstrap_servers=settings.kafka_server,
  value_serializer=lambda v: json.dumps(v).encode("utf-8")
)

client = redis.Redis(
    host="localhost",
    port=6379,
    db=0
  )


@app.get("/")
def root():
  return {"msg": "Producer"}

@app.post("/login")
def producer(model: EmailModel):
  pd.send(settings.kafka_topic, dict(model))
  pd.flush()
  return {"status": True}

@app.post('/code')
def code(id: str, model: EmailModel):
  result = client.get(id)
  # client.delete(id)
  print(findOne(model.email))
  if bool(result) == True :
    return{"status": True, "acess": result , "token": set_token(id, model.email)}
  else :  return{"status": True, "acess": result , "token": "not_set"}

