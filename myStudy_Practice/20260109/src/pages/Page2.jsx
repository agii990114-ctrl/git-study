import { useState } from "react";
import List from '@components/List.jsx'

const Page = () => {
  const [add, setAdd] = useState('');
  // const [search, setSearch] = useState('');
  const [arr, setArr] = useState([]);
  const [subArr, setSubArr] = useState([]);
  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState([]);

  const searchArr = arr.filter((v) => v.includes(search))

  const styles = "text-decoration-line-through text-secondary"


  const onSubmit = (e) => {
    e.preventDefault()
    setArr([...arr, add])

    setAdd('')

  }


  const clickDel = (i) => {
    // console.log(searchArr[i])
    setArr(arr.filter((_,index) => index !== arr.indexOf(searchArr[i])))
    // else setArr(arr.filter((_,index) => index !== i))
    // setArr(arr.filter((v) => arr.indexOf(v) !== arr.indexOf(searchArr[i])))
    // if(checked.includes(arr.indexOf(searchArr[i]))) setChecked(checked.filter((v)=> v !== arr.indexOf(searchArr[i])))

  }

  const onSearch = (e) => {
    setSubArr(searchArr)
    setSearch(e.target.value)
  }


  const onCheck = (i) => {
    if(checked.includes(arr.indexOf(searchArr[i]))) setChecked(checked.filter((_,index)=> index !== arr.indexOf(searchArr[i])))
    else setChecked([...checked, arr.indexOf(searchArr[i])])
    
    e.target.nextElementSibling.classList.toggle('text-decoration-line-through'),
    e.target.nextElementSibling.classList.toggle('text-secondary')
    // e.target.nextElementSibling.classList.toggle('fw-bold')
    // if (search) document.getElementsByClassName('word-item')[arr.indexOf(searchArr[i])].querySelector('span').classList.toggle('text-decoration-line-through')
    // else document.getElementsByClassName('word-item')[i].querySelector('span').classList.toggle('text-decoration-line-through')
    
  }


  const onChange = (e) => {

  }

  return (
    <div className="word-container">
      <h3 className="text-center mb-4">단어장</h3>

      {/* {<!-- 입력 및 수정 영역 -->} */}
      <form className="input-group mb-3" onSubmit={onSubmit}>
        <input type="text" name="word" className="form-control" placeholder="단어를 입력하세요" required value={add} onChange={e => setAdd(e.target.value)}  />
        <button type="submit" className="btn btn-primary">추가</button>
      </form>

      {/* <!-- 검색 영역 --> */}
      <input type="text" name="search" className="form-control mb-3" placeholder="검색어를 입력하세요" onKeyUp={e => onSearch(e)} />
      {/* <!-- 목록 --> */}
      <ul className="list-group">
        {/* <!-- 단어를 여기에 추가됩니다 --> */}
        {
          searchArr.map((v, i) => <List key={i} onCheck={onCheck} clickDel={clickDel} index={i} value={v}/>
            // <li key={i} className="list-group-item d-flex justify-content-between align-items-center word-item" >
            //   <div className="form-check">
            //     <input className="form-check-input" type="checkbox" onChange={() => { onCheck(i) }} checked={checked.includes(arr.indexOf(searchArr[i]))}/>
            //     <span className={`ms-2`}>{v}</span>
            //   </div>
            //   <button className="btn btn-sm btn-outline-danger" onClick={() => { clickDel(i) }}>삭제</button>
            // </li>
          )
        }
      </ul>
    </div>
  )
}

export default Page;