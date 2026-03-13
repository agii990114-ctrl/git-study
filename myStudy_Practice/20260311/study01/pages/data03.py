from settings import settings
import mariadb
import streamlit as st
import pandas as pd


st.set_page_config(
  page_title="team4",
  page_icon="💗",
  layout="wide",
)

conn_params = {
    "user" : settings.mariadb_user,
    "password" : settings.mariadb_password,
    "host" : settings.mariadb_host,
    "database" : settings.mariadb_database,
    "port" : settings.mariadb_port,
}

def getList_city():
  sql = f'select * from db_to_air.'
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


st.title("data03")