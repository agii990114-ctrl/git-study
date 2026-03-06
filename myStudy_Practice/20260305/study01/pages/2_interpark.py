from bs4 import BeautifulSoup as bs
from requests import get
import pandas as pd
import streamlit as st
import json

st.set_page_config(
  page_title="interpark 수집",
  page_icon="💗",
  layout="wide",
)


# 인터파크 장르별 URL

options = ["MUSICAL", "CONCERT", "CLASSIC", "KIDS","DRAMA","EXHIBIT"]

selected = st.selectbox(label="공연 장르", 
	options=options,
	index=None,
	placeholder="수집 대상을 선택하세요.")

if 'concert_index' not in st.session_state:
	st.session_state.concert_index = ''

# # 뮤지컬 url
# musical_url = "https://tickets.interpark.com/contents/ranking?genre="
# # 콘서트 url
# concert_url = "https://tickets.interpark.com/contents/ranking?genre=CONCERT"
# # 클래식 url
# classic_url = "https://tickets.interpark.com/contents/ranking?genre=CLASSIC"
# # 아동 url
# kids_url = "https://tickets.interpark.com/contents/ranking?genre=KIDS"
# # 연극 url
# drama_url = "https://tickets.interpark.com/contents/ranking?genre=DRAMA"
# # 전시 url
# exhibit_url = "https://tickets.interpark.com/contents/ranking?genre=EXHIBIT"




# 데이터 수집
def getData():
  try:
    url = f"https://tickets.interpark.com/contents/ranking?genre={options[st.session_state.concert_index]}"
    st.text(f"URL: {url}")
    print(url)
    res = get(url)
    if res.status_code == 200:
      st.text("인터파크 티켓 수집 시작!")
      tickets = [] # { 장르, 티켓이름, 장소, 시작날짜, 종료날짜, 예매율 }
      data = bs(res.text)
      list = data.select("div.responsive-ranking-list_rankingItem__PuQPJ")
      genre = url.split("genre=")[-1]
      titles = data.select("li.responsive-ranking-list_goodsName__aHHGY")
      places = data.select("li.responsive-ranking-list_placeName__9HN2O")
      startDays = data.select("div.responsive-ranking-list_dateWrap__jBu5n li:first-of-type")
      lastDays = data.select("div.responsive-ranking-list_dateWrap__jBu5n li:last-of-type")
      Bookings = data.select("li.responsive-ranking-list_bookingPercent__7ppKT")
      for i in range(len(list)):
        title = titles[i].get_text()
        place = places[i].get_text()
        startDay = startDays[i].get_text()
        lastDay = lastDays[i].get_text()
        Booking = Bookings[i].get_text()
        tickets.append({"genre": genre, "title":title, "place":place,"startDay":startDay,"lastDay":lastDay,"Booking":Booking})
      json_string = json.dumps(tickets, ensure_ascii=False, indent=2)
      tab1, tab2, tab3 = st.tabs(["HTML 데이터", "JSON 데이터", "DataFrame"])
      with tab1:
        st.text("html 출력")
        st.text(data)
      with tab2:
        st.text("JSON 출력")
        st.json(body=json_string, expanded=True, width="stretch")
      with tab3:
        st.text("DataFrame 출력")
        df =  pd.DataFrame(tickets)
        df.columns=['장르', '티켓이름','장소','시작날짜','종료날짜','예매율']
        st.dataframe(df, use_container_width=True)
  except Exception as e:
    return 0
  return 1

if st.button(f"수집하기"):
  getData()


def cleanData(txt):
  list = ["\n", "\xa0", "\r", "\t", "총건수"]
  for target in list:
    txt = txt.replace(target, "")
  txt = txt.replace("'", '"')
  return txt.strip()

if selected:
  print(selected)
  st.session_state.concert_index = options.index(selected)