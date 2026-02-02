import Index from "./Index"
import Product from "./Product"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CookiesProvider } from 'react-cookie'

function App() {

  const path = [
    { path: "/", element: <Index /> },
    { path: "/product", element: <Product /> },
  ]

  return (
    <>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            {
              path.map((v, i) => <Route key={i} path={v.path} element={v.element} />)
            }
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </>
  )
}

export default App
