import {useState} from 'react'
import './App.css'

const Index=()=>{
  const [count,setCount]=useState(0)

  const increment=()=>{
    setCount(count+1)
  }

  const decrement=()=>{
    setCount(count-1)
  }

  return(
    <div className='container'>
      <div>
      <h1>Counter</h1>     
        </div> 
        <div className='content'>
        <button type='button' onClick={decrement}>Decrease</button>
        <p>{count}</p>
        <button type='buttton' onClick={increment} >Increase</button>
        </div>
      
    </div>
  )
}
export default Index