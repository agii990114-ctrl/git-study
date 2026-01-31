
const List = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center word-item" >
      <div className="form-check">
        <input className="form-check-input" type="checkbox" onChange={() => {props.onCheck(props.index)}} />
        <span className={`ms-2`}>{props.value}</span>
        {/* <span className={`ms-2 ${(check)? "text-decoration-line-through text-secondary": ""}`}>{v}</span> */}
      </div>
      <button className="btn btn-sm btn-outline-danger" onClick={() => {props.clickDel(props.index)}}>삭제</button>
    </li>
  )
}

export default List;