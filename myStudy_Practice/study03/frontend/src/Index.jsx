import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
const Index = () => {
  const nav = useNavigate()

  const [cookies, setCookie, removeCookie] = useCookies(['ok'])

  const api = axios.create({
    baseURL: import.meta.env.VITE_APP_FASTAPI_URL || "http://localhost:8000",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  })

  

  const Input = ({ id, value, name }) => {

    const [check, setCheck] = useState(0)

    return (
      <>
        <label htmlFor={id}>{value}</label>
        <input type='checkbox' id={id} value={value} name={name} />
      </>
    )
  }

  const list = [
    { id: 1, value: "상품1", product: "product" },
    { id: 2, value: "상품2", product: "product" },
    { id: 3, value: "상품3", product: "product" },
  ]

  const submitEvent = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);


    // 'interest'라는 name을 가진 체크박스 중 체크된 것들의 value만 배열로 가져오기
    const checkedValues = formData.getAll('product')
    const checkList = checkedValues.map((v) => {
      return { "product": v }
    })
    console.log(checkList);
    console.log(e.target)

    setCookie("basket",checkList)
    // api.post("/product")
    // .then(res => console.log(res))
  }

  return (
    <>
      <form onSubmit={submitEvent}>
        {
          list.map((v, i) => <Input id={v.id} value={v.id} name={v.product} key={i} />)
        }
        <button type='submit'>장바구니</button>
      </form>
    </>
  )
}

export default Index
