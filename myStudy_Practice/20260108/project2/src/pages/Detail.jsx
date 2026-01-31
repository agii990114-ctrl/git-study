import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { list } from '@/data.js'

const Detail = () => {
  const nav = useNavigate()
  const { key } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [accept, setAccept] = useState(0);
  const [change, setChange] = useState(true);

  useEffect(() => {
    const data = list[key]
    setTitle(data.title);
    setContent(data.content);
    setAccept(data.accept);
  }, [])


  return (
    <div className="container mt-3">
      <h1 className="text-center bg-success text-dark bg-opacity-50">DETAIL</h1>
      <form onSubmit={e => e.preventDefault()}>
        <div className="mb-3 mt-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" className="form-control" id="title" placeholder="Enter title" name="title" value={title} required autoComplete="off" onChange={(e) => setTitle(e.target.value)} readOnly={change} />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content:</label>
          <input type="text" className="form-control" id="content" placeholder="Enter content" name="content" value={content} autoComplete="off" onChange={(e) => setContent(e.target.value)} readOnly={change} />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary me-md-2" type="submit" onClick={() => setChange(!change)}>{(change) ? "수정" : "저장"}</button>
          <button className={`${accept === 1 ? 'btn btn-warning' : 'btn btn-success'}`} type="button" onClick={() => (accept === 1) ? setAccept(2) : setAccept(1)}> {accept === 1 ? '미승인' : '승인'}</button>
          <button className="btn btn-secondary" onClick={() => nav('/')}>취소</button>
        </div>
      </form>
    </div>
  )
}

export default Detail;