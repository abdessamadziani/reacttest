import Counter from './Counter'
import Product from './Product'
import {useState} from 'react'
import {v4 as uuid} from "uuid"



function Products() {
    let show=true
    let [title,setTitle]=useState("")
    let [price,setPrice]=useState("")

    const changeTitle=(e)=>{
      setTitle(e.target.value)
      console.log("hhe",title)

    }
    const changePrice=(e)=>{
      setPrice(e.target.value)
    }

    const sbmt=(e)=>
    {
      e.preventDefault()
      console.log(newproduct)
      setPds([newproduct,...pds])
      setTitle("")
      setPrice("")

    }
    const newproduct={
      id:uuid(),
      label: title,
      price
    }

    let [pds,setPds] =useState( [{
        id: 1,
        label: "iphone x",
        nationality: "usa",
        price: 1500
                 },
    {
        id: 2,
        label: "redmi",
        nationality: "china",
        price: 500
    }
    ,
{


        id: 3,
        label: "samsung",
        nationality: "corea",
        price: 1000
        },


])
let myDelete=(id)=> { let myListe =pds.filter(product=> product.id !==id ) ;
    setPds(myListe) };

  
  



  return (
    <>
    <Counter></Counter>
    <form onSubmit={sbmt}>
      <div>
        <input value={title} onChange={changeTitle} type="text" placeholder='title' />
      </div>
      <div>
        <input value={price}   onChange={changePrice} type="number" placeholder='price' />
      </div>
      <button>Save</button>
    </form>
    {title}-- {price}
    <div>Products</div>
    {show ? 
    <ul>
        {pds.map((product,i) =>
        
           (
            <Product id={product.id} onDeleteclick={myDelete} key={i} data={product} />
           )
        )}
    </ul>
    : "you cant view it" }
    </>
  )
}

export default Products