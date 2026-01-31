import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { list } from '@/data.js'


const List = () => {
    const nav = useNavigate()

    const [arr, setArr] = useState([]);
    const [state, setState] = useState();

    useEffect(() => {
        if(state===1 || state===2){
            setArr(list.filter((v)=>v.accept === state))
        }else setArr([...list])
    }, [state])

    const onClick = (i) => {
        nav(`/detail/${i}`)
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center bg-success text-dark bg-opacity-50">LIST</h1>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-secondary" onClick={() => setState(0)}>전체</button>
                <button className="btn btn-success" onClick={() => setState(1)}>승인</button>
                <button className="btn btn-warning" onClick={() => setState(2)}>미승인</button>
                <button className="btn btn-primary" onClick={() => nav('/new')}>추가</button>
            </div>
            <div className="list-group mt-2 text-center">
                {
                    arr.map((v, i) => <button className={`list-group-item m-1 display-6 ${v.accept === 1 ? 'list-group-item-success' : 'list-group-item-warning'}`} onClick={()=>onClick(i)} key={i}>{v.title}</button>)
                }
            </div>
        </div>
    )
}

export default List;