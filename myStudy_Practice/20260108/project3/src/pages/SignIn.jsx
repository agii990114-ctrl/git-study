import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { list } from '@/data.js'
import Input from '@components/Input.jsx'


const SignIn = () => {
  const nav = useNavigate()
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const inputArr = [
    { htmlFor: 'email', type: 'email', id: 'email', name: 'email', value: email, onChange: setEmail, label: 'Email' },
    { htmlFor: 'pwd', type: 'password', id: 'pwd', name: 'password', value: pwd, onChange: setPwd, label: 'Password' }
  ]
  const onSubmit = (e) => {
    e.preventDefault()
    const logIn = list.filter((v) => v.email === email && v.password === pwd)
    if(logIn.length === 1) alert(`${logIn[0].name}님 환영합니다.`)
      else alert(`응 안돼 돌아가~`)
  }


  return (
    <div className="container mt-3">
      <h1 className="text-center bg-success text-dark bg-opacity-50">SignIn</h1>
      <form onSubmit={onSubmit}>
        {
          inputArr.map((v, i) => <Input key={i} htmlFor={v.htmlFor} type={v.type} id={v.id} name={v.name} value={v.value} onChange={v.onChange} label={v.label} />)
        }
        <div className="d-flex">
          <div className="p-2 flex-fill d-grid">
            <button type="submit" className="btn btn-warning">SignIn</button>
          </div>
          <div className="p-2 flex-fill d-grid">
            <button onClick={() => nav('/signUp')} className="btn btn-primary">SignUp</button>
          </div>
          <div className="p-2 flex-fill d-grid">
            <button onClick={() => nav('/')} className="btn btn-danger">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn;