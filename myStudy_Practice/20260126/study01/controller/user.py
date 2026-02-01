from fastapi import APIRouter
from configs.db import getConn
import mariadb

router = APIRouter(prefix="/user", tags=["사용자"])


@router.get(path="")
def user():
    try:
        conn = getConn()
        if conn:
            cur = conn.cursor()
            sql = f"select * from edu.`test`"
            cur.execute(sql)
            rows = cur.fetchall()
            columns = [desc[0] for desc in cur.description]
            cur.close()
            conn.close()
            result = [dict(zip(columns, row)) for row in rows]
            return {"status": True, "result": result}
    except mariadb.Error as e:
        print('에러: ', e)
    return {"status": False}


@router.post(path="")
def user():
    return {"안녕하시와요"}


@router.put(path="")
def user():
    return {"녕안해?"}


@router.delete(path="")
def user():
    return {"해해해"}


# @main.post("")
