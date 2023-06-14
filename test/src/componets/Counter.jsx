
import {useState} from 'react'


function Counter() {
    let [counter,setCounter]=useState(0)
    let inc=()=>{
        setCounter(counter+=1)
    }
  return (
    <>
    <h1>My counter</h1>
    <h3>{counter}</h3>
    <button onClick={inc}>Increment</button>
    
    </>
  )
}

export default Counter
