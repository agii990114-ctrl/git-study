from fastapi import APIRouter
from configs.db import getConn
import mariadb

router = APIRouter(prefix="/root", tags=["기본"])


@router.get(path="")
def root():
    try:
        conn = getConn()
        if conn:
            cur = conn.cursor()
            sql = "select 1 as no"
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
