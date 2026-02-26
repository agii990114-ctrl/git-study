from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def root_root():
    return {"hello":"world"}