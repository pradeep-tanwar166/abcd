import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  const increment =()=>{
    setCount(count+1);
  }

  const [mode, setmode] = useState('light')
 
  const togglemode=()=>{
if(mode==='Dark'){
    document.body.style.backgroundColor="black";
setmode("light");
  } 
  else{
    document.body.style.backgroundColor="white";
    setmode("Dark");
  }
  }
  

  return (
    <>
    <Navbar className="" togglemode={togglemode} ></Navbar>
     <h1 className='m-5 text-3xl text-blue-500'>NAVBAR</h1>


     <p className='text-3xl mx-5 font-bold'>Count ={count}</p>

     <button className='mx-5 border-2 p-2 rounded-md border-zinc-400 hover:border-blue-500 hover:bg-blue-500 transition ease-in-out delay-150' onClick={increment}>+</button>
    </>
  )
}

export default App
