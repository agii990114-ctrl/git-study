const Product = () => {

  const Input = ({id, value, name }) => {
    return (
      <>
        <label htmlFor={id}>{value}</label>
        <input type='checkbox' id={id} value={value} name={name}/>
      </>
    )
  }

  const list = [
    {id: 1, value: "상품1", product: "product"},
    {id: 2, value: "상품2", product: "product"},
    {id: 3, value: "상품3", product: "product"},
  ]


  return (
    <>
      <form>
        {
          list.map((v,i)=> <Input id={v.id} value={v.value} name={v.product} key={i}/>)
        }
        <button type='submit'>안녕</button>
      </form>
    </>
  )
}

export default Product
