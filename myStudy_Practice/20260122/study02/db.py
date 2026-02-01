import mariadb
import os


def getConn():
    try:
        return mariadb.connect(
            user=os.getenv("USER"),
            password=os.getenv("PASSWORD"),
            port=int(os.getenv("PORT")),
            host=os.getenv("HOST"),
            database=os.getenv("DATABASE")
        )
    except mariadb.Error as e:
        print('에러: ', e)
        return None


def findAll(sql):
    conn = getConn()
    result = []
    try:
        if conn:
            cur = conn.cursor()
            cur.execute(sql)
            rows = cur.fetchall()
            columns = [desc[0] for desc in cur.description]
            cur.close()
            conn.close()
            result = [dict(zip(columns, row)) for row in rows]
    except mariadb.Error as e:
        print('에러: ', e)
    return result


def save(sql):
    conn = getConn()
    result = None
    try:
        if conn:
            cur = conn.cursor()
            cur.execute(sql)
            conn.commit()
            cur.close()
            conn.close()
            result = True
    except mariadb.Error as e:
        print('에러: ', e)
    return result
