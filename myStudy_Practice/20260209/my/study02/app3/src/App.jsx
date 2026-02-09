import { useState } from 'react'
import axios from 'axios'

function App() {

  const [token, setToken] = useState("")
  const evnet1 = e => {
    e.preventDefault()
    axios.post('http://localhost:8001/login', { "email": e.target.email.value })
    .then(res => {
      console.log(res)
      if (res.data.status == true){
        alert("메일발송 완료")
      }
    })
    .catch(err=>console.log(err))
  }
  const evnet2 = e => {
    e.preventDefault()
    // console.log("토큰발급", e.target.code.value)
    axios.post('http://localhost:8001/code', { "id": e.target.code.value })
    .then(res => {
      console.log(res)
      if (res.data.status == true){
        setToken(res.data.access_token)
        alert("코드입력 완료")
        console.log(token)
      } else (alert("코드 틀림~"))
    })
    .catch(err=>console.log(err))
  }
  const event3 = e => {
    console.log("사용자 정보 요청" , token)
    axios.post('http://localhost:8001/me',{},{headers:{"Authorization":`Bearer ${token}`}})
    .then(res => {
      console.log(res)
      if (res.data.status == true){
        alert("정보 요청 완료")
      } else (alert("정보 요청 실패~"))
    })
    .catch(err=>console.log(err))
  }

  return (
    <>
      <form onSubmit={evnet1}>
        <input type='email' name='email' />
        <button type='submit'> 코드 발급 </button>
      </form>
      <form onSubmit={evnet2}>
        <input type='text' name='code' />
        <button type='submit'> 토큰 발급 </button>
      </form>
      <hr />
      <button type='button' onClick={event3}>사용자 정보</button>
    </>
  )
}

export default App
