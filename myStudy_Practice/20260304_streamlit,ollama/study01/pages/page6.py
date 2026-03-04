import streamlit as st
import ollama

st.set_page_config(
    page_title="5. 로컬 AI",
    page_icon="❤️",
    layout="wide",
)

st.title("[5] 로컬 AI")

if "history" not in st.session_state:
    st.session_state["history"] = []

if prompt := st.chat_input("메세지를 입력하세요"):
    st.write(prompt)
    st.session_state["history"].append({"role":"user","content":prompt})
    res = ollama.chat(model="gemma3:4b",messages=st.session_state["history"])
    st.write(res.message.content)