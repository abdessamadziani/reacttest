
const Product =({data,onDeleteclick,id}) => {
    let {label,price,nationality}=data
  return (
    <>
      <li className="my-3">label {label} |  price :  {price}  |  nationality :  {nationality}   </li>
      <button onClick={() => onDeleteclick(id)}>delete</button>
    

    </>
  )
}

export default Product