const Input = (props) => {
    return (
        <div className="mb-3 mt-3">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input type={props.type} className="form-control" id={props.id} placeholder="Enter name" name={props.name} required readOnly={props.readOnly} value={props.value} onChange={e => {props.onChange(e.target.value)}} />
        </div>
    )
}

export default Input;