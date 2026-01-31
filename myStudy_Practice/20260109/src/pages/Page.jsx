import { useState } from "react";


const Page = () => {
    const [check, setCheck] = useState(false)
    const [text, setText] = useState({ id: '', text: '', checked: '' })
    const [arr, setArr] = useState([])
    const [search, setSearch] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        // for(let v of arr) {
        //     if(v.id === text.id && v.text === text.text) return setText({ id: '', text: '', checked: '' })
        // }
        setArr([...arr, text])
        setText({ id: '', text: '', checked: '' })
    }

    const subArr = arr.filter((v) => v.text.toLowerCase().includes(search.toLowerCase()))

    const onChange = (e) => {
        setText({ id: arr.length, text: e.target.value, checked: false })
        console.log(text.text.toLowerCase())
    }

    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    const clickDel = (i) => {
        console.log(arr.filter((value) => value.id !== subArr[i].id &&  value.text !== subArr[i].text))
        // console.log(arr.filter((value) => value.id !== subArr[i].id || value.text !== subArr[i].text))

        // if(arr.filter((value) => value.id === subArr[i].id &&  value.text === subArr[i].text)) setArr(arr.filter((_,index) =>index !== arr.indexOf(subArr[i].text)))
        // setArr(arr.filter((value) => value.id !== subArr[i].id || value.text !== subArr[i].text))
    }

    const onCheck = (i) => {

        if (!subArr[i].checked) subArr[i].checked = true;
        else subArr[i].checked = false;
        setCheck(!check)

        console.log(subArr[i])
        console.log(arr)
    }
    return (
        <div className="word-container">
            <h3 className="text-center mb-4">단어장</h3>

            {/* <!-- 입력 및 수정 영역 --> */}
            <form className="input-group mb-3" onSubmit={onSubmit}>
                <input type="text" name="word" className="form-control" placeholder="단어를 입력하세요" value={text.text} required onChange={e => onChange(e)} />
                <button type="submit" className="btn btn-primary">추가</button>
            </form>

            {/* <!-- 검색 영역 --> */}
            <input type="text" name="search" className="form-control mb-3" placeholder="검색어를 입력하세요" value={search} onChange={e => onSearch(e)} />

            {/* <!-- 목록 --> */}
            <ul className="list-group">
                {/* <!-- 단어를 여기에 추가됩니다 --> */}
                {
                    subArr.map((v, i) =>
                        <li className="list-group-item d-flex justify-content-between align-items-center word-item" key={i}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked={v.checked} onChange={() => onCheck(i)} />
                                <span className={`ms-2 ${v.checked ? 'text-decoration-line-through text-secondary' : ''}`}>{v.text}</span>
                            </div>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => clickDel(i)}>삭제</button>
                        </li>
                    )
                }

                {/* <li className="list-group-item d-flex justify-content-between align-items-center word-item completed">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" onChange="" checked />
                        <span className="ms-2">조건문 정리완료</span>
                    </div>
                    <button className="btn btn-sm btn-outline-danger" onClick="">삭제</button>
                </li> */}
            </ul>
        </div>
    )
}

export default Page;