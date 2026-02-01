import { useState, useEffect } from 'react'
import { api } from '@utils/network.js'
import { useNavigate } from "react-router";
import { useAuth } from '@hooks/AuthProvider.jsx'
import { useCookies } from 'react-cookie'
import CryptoJS from 'crypto-js'

const Pagination = ({ total, page, pagingEvent }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center mt-4">
        <li className="page-item">
          <button className="page-link" aria-label="Previous" onClick={()=>pagingEvent(page - 1)} disabled={page === 1}>
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {
          Array.from( { length: total } )?.map((_,i) => {
            const index = (i + 1)
            return (
              <li className="page-item cursor-pointer" key={i}>
                <button className={page === index ? "page-link active" : "page-link"} onClick={()=>pagingEvent(index)} disabled={page === index}>{index}</button>
              </li>
            )
          })
        }
        <li className="page-item">
          <button className="page-link" aria-label="Next" onClick={()=>pagingEvent(page + 1)} disabled={page === total}>
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

const Home = () => {
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const { checkAuth } = useAuth()
  const [cookies, setCookie, removeCookie] = useCookies(['ck']);
  const searchEvent = e => {
    e.preventDefault()
    //getData(1, search)
    setPage(1)
    setSearch("")
  }
  const pagingEvent = index => {
    setPage(index)
    //getData(index, search)
  }
  const boardAdd = () => {
    if(checkAuth()) navigate('/boardadd')
  }
  const boardView = no => {

    const SECRET_KEY = CryptoJS.enc.Utf8.parse("your-very-secret-key-123456789012".padEnd(32, '\0'));

    const userData = { id: 1, name: "홍길동", role: "admin" };
    const jsonString = JSON.stringify(userData);

    // 1. IV(초기화 벡터) 생성 (16바이트)
    const iv = CryptoJS.lib.WordArray.random(16);

    // 2. AES 암호화 (CBC 모드)
    const encrypted = CryptoJS.AES.encrypt(jsonString, SECRET_KEY, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    // 3. 서버가 받기 쉽게 [IV(16바이트) + 암호문] 형태로 합치기
    // 합친 후 Base64로 변환합니다.
    const combinedData = iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);

    // 4. 쿠키 저장 (URL 인코딩은 브라우저/라이브러리가 처리)
    setCookie('user_info', combinedData, { path: '/', maxAge: 3600 });
    if(checkAuth()) navigate(`/boardview/${no}`)
  }
/*
  const getData = (i, q) => {
    api.get(`/board?page=${i}&search=${q}`)
    .then(res => {
      if(res?.data?.status) {
        setList(res?.data?.result)
        setTotal(res?.data?.pagination?.total)
      }
    })
    .catch(err => console.error(err))
    .finally(()=>console.log("완료"))
  }
*/
  useEffect(() => {
    //getData(page, search)
    const arr1 = [
      {"no":1, "title":"샘플을 만들었어요", "user":"이나라"},
      {"no":2, "title":"샘플을 만들어 영원히", "user":"남영준"},
      {"no":3, "title":"여름이었다...☆", "user":"조윤주"},
      {"no":4, "title":"이것 뭐에요?", "user":"이채훈"}
    ]
    const arr2 = {
      "total": 5,
      "size": 5
    }
    setList(arr1)
    setTotal(arr2.total)
  }, [])
  return (
    <div className="container mt-3">
			<h1 className="display-1 text-center">게시판</h1>
			<div className="d-flex justify-content-between align-items-center mt-4">
				<div className="btn-group">
					<button type='button' className="btn btn-primary" onClick={boardAdd}>게시글 작성</button>
				</div>
				<form className="d-flex" style={{"maxWidth" : "300px"}} onSubmit={searchEvent}>
					<input className="form-control me-2" type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="검색어를 입력하세요" />
					<button className="btn btn-outline-dark" type="submit">Search</button>
				</form>
			</div>
			<table className="table table-hover mt-3 text-center">
				<thead className="table-dark">
					<tr>
						<th>no</th>
						<th>게시글</th>
						<th>작성자</th>
					</tr>
				</thead>
				<tbody>
          {
            list?.map((v, i) => {
              return (
                <tr className="cursor-pointer" key={i} onClick={()=>boardView(v.no)}>
                  <td>{v.no}</td>
                  <td>{v.title}</td>
                  <td>{v.user}</td>
                </tr>
              )
            })
          }
				</tbody>
			</table>
      <Pagination total={total} page={page} pagingEvent={pagingEvent} />
		</div>
  )
}

export default Home