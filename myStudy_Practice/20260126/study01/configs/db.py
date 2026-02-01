import os
import mariadb
from dotenv import load_dotenv
load_dotenv()


conn_params = {

    "user": os.getenv('DB_USER'),
    "password": os.getenv('DB_PASSWORD'),
    "host": os.getenv('DB_HOST'),
    "port": int(os.getenv('DB_PORT')),
    "database": os.getenv('DB_DATABASE')
}


def getConn():
    try:
        conn = mariadb.connect(**conn_params)
        if conn == None:
            return None
        return conn
    except mariadb.Error as e:
        print('에러: ', e)
        return None


# sql = f"select * from edu.`test`"


# def findAll(sql):
#     conn = getConn()
#     result = []
#     try:
#         if conn:
#             cur = conn.cursor()
#             cur.execute(sql)
#             rows = cur.fetchall()
#             columns = [desc[0] for desc in cur.description]
#             cur.close()
#             conn.close()
#             result = [dict(zip(columns, row)) for row in rows]
#     except mariadb.Error as e:
#         print('에러: ', e)
#     return result


# print(findAll(sql))
