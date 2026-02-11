import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {

  const [files, setFiles] = useState([])

  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }

  const event1 = e => {
    e.preventDefault()
    console.log("요청")
    console.log(fileList)

    const formData = new FormData();
    const fileList = e.target.file.files
    formData.append("text", e.target.txt.value)
    for (let i = 0; i < fileList.length; i++) {
      console.log(fileList[i])
      formData.append("files", fileList[i])
    }
    axios.post("http://localhost:8000/upload", formData, config)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  const event2 = async e => {
    e.preventDefault()
    const fileList = e.target.file.files
    const text = e.target.txt.value
    const files = []

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i]
      // console.log(fileList[i])
      const base64File = await fileToBase64(file)
      files[i] = base64File
    }

    const params = { text, files }
    console.log(params)
    axios.post("http://localhost:8000/upload2", params).then(res => console.log(res)).catch(err => console.error(err))

  }


  const fileToBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file)

      reader.onload = () => {
        // console.log(reader.result)
        const data = reader.result.split(",")[1]
        resolve(data)
      }

      reader.onerror = err => {
        console.log(err)
        reject(err)
      }
    })
  }

  const event3 = e => {
    e.preventDefault()
    console.log(files)
    const formData = new FormData();
    formData.append("text", e.target.txt.value)
    files.forEach(file => formData.append("files", file))
    axios.post("http://app2:8000/upload", formData, config)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  return (
    <>
      <header>
        <h1>File Upload</h1>
      </header>
      <main>
        <form onSubmit={event3}>
          <div className="form">
            <input type="text" name="txt" id="txt" />
          </div>
          <div className="form">
            <input type="file" name="file" id="file" multiple accept="image/*" onChange={e => setFiles(Array.from(e.target.files))} />
            <input type="submit" value="파일업로드" />
          </div>
        </form>
      </main>
    </>
  )
}

export default App
