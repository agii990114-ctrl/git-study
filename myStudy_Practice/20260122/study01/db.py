import os
import mariadb
# from dotenv import load_dotenv
# load_dotenv()


def getConn():
    try:
        return mariadb.connect(
            user=os.getenv('USER'),
            password=os.getenv('PASSWORD'),
            host=os.getenv('HOST'),
            port=int(os.getenv('PORT')),
            database=os.getenv('DATABASE')
        )

    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        return None


def findOne(sql):
    result = None
    try:
        conn = getConn()
        if conn:
            cur = conn.cursor()
            cur.execute(sql)
            rows = cur.fetchone()  # 하나의 행을 받을 때 쓰는 함수
            
            columns = [desc[0] for desc in cur.description]
            cur.close()
            conn.close()
            result = dict(zip(columns, rows)) if rows else None
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
    return result


def save(sql):
    result = False
    try:
        conn = getConn()
        if conn:
            cur = conn.cursor()
            cur.execute(sql)
            conn.commit()
            cur.close()
            conn.close()
            result = True
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
    return result

# 1990년 이후부터 매니저로 근무하고 있는 사원들의 사원번호, 부서번호, 매니저 시작날짜 추출하시오.


def findAll(sql):
    result = []
    try:
        conn = getConn()
        # print(conn, type(conn))
        if conn:
            cur = conn.cursor()
            cur.execute(sql)
            rows = cur.fetchall()  # 하나의 행을 받을 때 쓰는 함수
            columns = [desc[0] for desc in cur.description]
            cur.close()
            conn.close()
            result = [dict(zip(columns, row)) for row in rows]

    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
    return result


deptNo1 = 'd001'
deptNo2 = 'd002'
deptNo3 = 'd009'

deptNo = [deptNo1, deptNo2, deptNo3]

sql = f"""
select dept_no, count(emp_no) as cnt
from edu.dept_emp
where dept_no in {tuple(deptNo)}
group by dept_no
"""


name = '물리몰리해~~'
sql2 = f"""
    insert 
    
"""

sql3 = f"""
select * from edu.test
"""
