import { BrowserRouter, Routes, Route } from "react-router";
import { useNavigate } from "react-router";
import { createContext, useContext, useEffect, useState } from "react";
import Bag from "./Bag";
// import AuthProvider,{ useAuth } from '@hooks/AuthProvider.jsx'
import { CookiesProvider } from 'react-cookie'
import { useCookies } from 'react-cookie';
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_FASTAPI_URL || "http://localhost:8000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

const Login = () => {

  const { isLogin, setIsLogin } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [cookies, setCookie, removeCookie] = useCookies(['jangbaguni']);
  const nav = useNavigate()



  const submitEvent = e => {
    e.preventDefault()
    const params = { email, pwd }
    api.post('/login', params).then(res => console.log(res))
    nav('/')
    setIsLogin(true)

  }




  const meEvent = () => {
    nav('/')
  }

  return (
    <div className="container mt-3">
      <h1 className="display-1 text-center">로그인</h1>
      <form onSubmit={submitEvent}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">이메일</label>
          <input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">비밀번호</label>
          <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." value={pwd} onChange={e => setPwd(e.target.value)} />
        </div>
        <div className="d-flex">
          <div className="p-2 flex-fill d-grid">
            <button type="submit" className="btn btn-primary">로그인</button>
          </div>
          <div className="p-2 flex-fill d-grid">
            <button type="button" className="btn btn-primary" onClick={meEvent}>취소</button>
          </div>
        </div>
      </form>
    </div>
  )
}


function Home() {

  const [cookies, setCookie, removeCookie] = useCookies(['jangbaguni']);
  const { isLogin, setIsLogin, delIsLogin } = useContext(AuthContext)
  useEffect(() => {
    if (cookies.user) setIsLogin(true)

  }, [])

  const [status, setStatus] = useState(false)

  const productArr = [
    { "no": 1, "title": "iPhone", "price": "1,700,000", "state": status },
    { "no": 2, "title": "Galaxy", "price": "1,700,000", "state": status },
    { "no": 3, "title": "Pixel", "price": "1,700,000", "state": status },
  ]

  const nav = useNavigate()

  const logOutEvent = () => {
    delIsLogin()
  }

  const submitEvent = (e) => {
    e.preventDefault()
    const data = new FormData(e.target).getAll("product")
    const params = { "product": [...data] }
    // const list = productArr.filter(v=>v.no === Number(data.map((v)=>v)))
    const list = []
    if (isLogin) {
      for (let v of productArr) {
        for (let i of data) {
          if (v.no === Number(i)) {
            list.push(v)
          }
        }
      }
    } else alert("로그인해주세요")

    console.log(list)
    setCookie('basket', list, { path: '/', maxAge: 24 * 60 * 60 })
    api.post('/basket')
    
  }


  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand d-md-none" href="#">Aperture</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" id="offcanvas">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Aperture</h5>
              <button className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 justify-content-between">
                {!isLogin ?
                  <li className="nav-item"><button className="nav-link" onClick={() => nav('/login')}>Login</button></li> :
                  <li className="nav-item"><button className="nav-link" onClick={() => logOutEvent()}>Logout</button></li>
                }
                <li className="nav-item"><a className="nav-link" href="#">Product</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
                <li className="nav-item"><button className="nav-link" onClick={() => nav('/bag')}>장바구니</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div className="col-md-6 p-lg-5 mx-auto my-5">
            <h1 className="display-3 fw-bold">Designed for engineers</h1>
            <h3 className="fw-normal text-muted mb-3">
              Build anything you want with Aperture
            </h3>
            <div className="d-flex gap-3 justify-content-center lead fw-normal">
              <a className="icon-link" href="#">Learn more</a>
              <a className="icon-link" href="#">Buy</a>
            </div>
          </div>
        </div>

        {/* SECTIONS */}
        <form onSubmit={submitEvent}
          className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <button type="submit">담기</button>
          {
            productArr?.map((v, i) => (
              <div key={i}
                className="text-bg-dark me-md-3 pt-3 px-3 text-center overflow-hidden"
              >
                <div className="my-3 py-3">
                  <input type="checkbox" name="product" id={v.no} value={v.no}
                    onChange={() => setStatus(!status)} />
                  <h2 className="display-5">{v.title}</h2>
                  <p className="lead">And an even wittier subheading.</p>
                </div>
                <div className="bg-body-tertiary shadow-sm mx-auto"
                  style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}>
                </div>
              </div>
            ))
          }
        </form>
      </main>

      {/* FOOTER */}
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-body-secondary">
              © 2017–2025
            </small>
          </div>
        </div>
      </footer>
    </>
  )
}

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [cookies, setCookie, removeCookie] = useCookies(['jangbaguni']);
  const [isLogin, setIsLogin] = useState(false);

  const delIsLogin = () => {
    setIsLogin(false)
    removeCookie('user')
  }
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, delIsLogin }}>
      {children}
    </AuthContext.Provider>
  )
}


const App = () => {
  const paths = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/bag", element: <Bag /> },
  ]

  return (
    <>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {paths?.map((v, i) => <Route key={i} path={v.path} element={v.element} />)}
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </CookiesProvider>
    </>
  )
}

export default App
