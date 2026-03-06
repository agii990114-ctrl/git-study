from bs4 import BeautifulSoup as bs
from requests import get
import pandas as pd
import streamlit as st
import json

st.set_page_config(
  page_title="_daily 수집",
  page_icon="💗",
  layout="wide",
)

url = "https://mapi.ticketlink.co.kr/mapi/ranking/genre/daily?categoryId=10&categoryId2=16&categoryId3=0&menu=RANKING"


def getData():
  try:
    # url = ""
    st.text(f"URL: {url}")
    res = get(url)
    if res.status_code == 200:
      st.text("티켓링크 API")
      tab1, tab3 = st.tabs(["JSON 데이터", "DataFrame"])
      with tab1:
        st.text("JSON 출력")
        st.json(res.text,expanded=True, width="stretch")
      with tab3:
        st.text("DataFrame 출력")
        data = json.loads(res.text).get('data',{}).get('rankingList',[])
        df = pd.DataFrame(data)
        st.dataframe(df)
  except Exception as e:
    return 0
  return 1

def cleanData(txt):
  list = ["\n", "\xa0", "\r", "\t", "총건수"]
  for target in list:
    txt = txt.replace(target, "")
  txt = txt.replace("'", '"')
  return txt.strip()

if st.button(f"수집하기"):
  getData()