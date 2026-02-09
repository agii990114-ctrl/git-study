import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'


const Home = () => {
  return(
    <h1>안녕하세요, 홈페이지에용99</h1>
  )
}

const Count = () => {
  return(
    <h1>Not Found호호</h1>
  )
}

function App() {
  const path = [
    {path : '/', element : <Home/>},
    {path : '*', element : <Count/>}
  ]

  return (
    <>
    <BrowserRouter>
      <Routes>
        {
          path.map((v,i)=><Route key={i} path={v.path} element={v.element}/>)
        }
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
