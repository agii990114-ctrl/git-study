import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { list } from '@/data.js'
import Input from '@components/Input.jsx'

// const Radio = (props) =>
//   <div className="p-2 flex-fill">
//     <div className="form-check">
//       <input type="radio" className="form-check-input" id="gender1" name="gender" value="1" checked={gender === 1} onChange={() => setGender(1)} />남성
//       <label className="form-check-label" htmlFor="gender1"></label>
//     </div>
//   </div>

const User = () => {
  const nav = useNavigate()
  const { key } = useParams()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [job, setJob] = useState('');
  const [gender, setGender] = useState(1);

  useEffect(() => {
    setName(list[key - 1].name);
    setEmail(list[key - 1].email);
    setPwd(list[key - 1].password);
    setJob(list[key - 1].job);
    setGender(list[key - 1].gender);
  }, [])

  const inputArr = [
    { htmlFor: 'name', type: 'text', id: 'name', name: 'name', value: name, onChange: setName, label: 'Name', readOnly: true },
    { htmlFor: 'email', type: 'email', id: 'email', name: 'email', value: email, onChange: setEmail, label: 'Email', readOnly: true},
    { htmlFor: 'pwd', type: 'password', id: 'pwd', name: 'password', value: pwd, onChange: setPwd, label: 'Password', readOnly: true},
    { htmlFor: 'job', type: 'text', id: 'job', name: 'job', value: job, onChange: setJob, label: 'Job', readOnly: false },
  ]

  return (
    <div className="container mt-3">
      <h1 className="text-center bg-success text-dark bg-opacity-50">User</h1>
      <img src="/images/img_avatar1.png" className="d-block mx-auto mt-3 profile-image" />
      <form onSubmit={e => e.preventDefault()}>
        {
          inputArr.map((v, i) => <Input key={i} htmlFor={v.htmlFor} type={v.type} id={v.id} name={v.name} value={v.value} onChange={v.onChange} label={v.label} readOnly={v.readOnly}/>)
        }
        <div className="d-flex">
          {
            [...Array(2)].map((v, i) =>
              <div className="p-2 flex-fill" key={i}>
                <div className="form-check">
                  <input type="radio" className="form-check-input" id={`gender${i + 1}`} name="gender" value={i} checked={gender === i + 1} onChange={() => setGender(i + 1)} />
                  <label className="form-check-label" htmlFor={`gender${i + 1}`}>{(i + 1 === 1) ? '남자' : '여자'}</label>
                </div>
              </div>
            )
          }
        </div>
        <div className="d-flex">
          <div className="p-2 flex-fill d-grid">
            <button type="submit" className="btn btn-success">Edit</button>
          </div>
          <div className="p-2 flex-fill d-grid">
            <button onClick={() => nav('/')} className="btn btn-danger">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default User;