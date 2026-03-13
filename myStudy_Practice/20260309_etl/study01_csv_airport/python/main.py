from settings import settings
import mariadb
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get('/')
def root():
    return("hi")

# connection parameters
conn_params = {
    "user" : settings.mariadb_user,
    "password" : settings.mariadb_password,
    "host" : settings.mariadb_host,
    "database" : settings.mariadb_database,
    "port" : settings.mariadb_port,
}

# Establish a connection


# def setData1(table, year= 0, month =0):
#     print(table)
#     print("db_air 에서 db_to_air 데이터 이관 작업")
    
#     where = f""

#     if table == '비행' and year > 0 and month > 0 :
#         where = f"where 년도 = '{year}' and `월` = '{month}'"
    
#     sql_del = f'{f'DELETE FROM `db_to_air`.`{table}` {where}' if table=='비행' and year > 0 and month> 0 else f'TRUNCATE TABLE `db_to_air`.`{table}`'}'
#     sql_ins = f'INSERT INTO `db_to_air`.`{table}` select * from `db_air`.{table} {where}'
#     sql_selc1 = f'select count(*) as cnt from `db_air`.`{table}` {where}'
#     sql_selc2 = f'select  count(*) as cnt from `db_to_air`.`{table}` {where}'

#     with mariadb.connect(**conn_params) as conn:
#         with conn.cursor() as cursor:
#             cursor.execute(sql_selc1)
#             rows = cursor.fetchone()
#             print(f'{table} 적재 : {rows[0]}')
#             cursor.execute(sql_del)
#             cursor.execute(sql_ins)
#             conn.commit()

#             # select
#             cursor.execute(sql_selc2)
#             rows = cursor.fetchone()
#             print(f'{table} 적재 : {rows[0]}')
#     print("작업 완료")

def setData2(data:dict):
    print("db_air 에서 db_to_air 데이터 이관 작업")
    table = data['table']
    year = data['year']
    month = data['month']
    no = data['no']
    result1 = ''
    result2 = ''

    where = f""

    if table == '비행' and year > 0 and month > 0 :
        where = f"where 년도 = '{year}' and `월` = '{month}'"

    # sql_del = f'TRUNCATE TABLE `db_to_air`.`{table}`'
    sql_del = f'{f'DELETE FROM `db_to_air`.`{table}` {where}' if table=='비행' and year > 0 and month> 0 else f'TRUNCATE TABLE `db_to_air`.`{table}`'}'
    sql_ins = f'INSERT INTO `db_to_air`.`{table}` select * from `db_air`.{table} {where}'
    sql_selc1 = f'select count(*) as cnt from `db_air`.`{table}` {where}'
    sql_selc2 = f'select  count(*) as cnt from `db_to_air`.`{table}` {where}'

    with mariadb.connect(**conn_params) as conn:
        with conn.cursor() as cursor:
            cursor.execute(sql_selc1)
            rows = cursor.fetchone()
            result1 = f'{table} 적재 : {rows[0]}'
            print(result1)
            cursor.execute(sql_del)
            cursor.execute(sql_ins)
            conn.commit()

            # select
            cursor.execute(sql_selc2)
            rows = cursor.fetchone()
            result2 = f'{table} 적재 : {rows[0]}'
            print(result2)
            sql4 = f"update db_to_air.jobs set `cnt` = {rows[0]}, `modDate` = now() where `no` = {no}"
            cursor.execute(sql4)
            conn.commit()

    return ("작업 완료",result1,result2)


def jobs(useYn):
    print("db_to_air useYn 데이터")
    
    sql = f'select `no`, `table`,`year`,`month` from db_to_air.jobs where useYn in ({useYn});'
    
    try:

        with mariadb.connect(**conn_params) as conn:
            with conn.cursor() as cursor:
                cursor.execute(sql)
                rows = cursor.fetchall()
                columns = [desc[0] for desc in cursor.description]
                result = [dict(zip(columns, row)) for row in rows]
        return (result)
    except mariadb.Error as e:
        return []
    

@app.post('/selectData')
def selectData(data:tuple[int,...]=()):
    print(data)
    for no in data:
        print(no)
        with mariadb.connect(**conn_params) as conn:
            select_sql = f'UPDATE `db_to_air`.`jobs` SET `useYn` = 1 WHERE no = {no}'
            with conn.cursor() as cursor:
                cursor.execute(select_sql)
                conn.commit()
    return {"status": True}


@app.post('/resetData')
def selectData():
    with mariadb.connect(**conn_params) as conn:
        select_sql = f'UPDATE `db_to_air`.`jobs` SET `useYn` = 0'
        with conn.cursor() as cursor:
            cursor.execute(select_sql)
            conn.commit()
    return {"status": True}


@app.post('/data')
def data():
    sql = 'select 1 from `db_to_air`.비행 where'
    result = []
    for row in jobs((1)):
        if row : result.append(setData2(row))
        else : return("작업 실패")
    return result