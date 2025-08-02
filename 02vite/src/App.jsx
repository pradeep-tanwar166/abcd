import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase=()=>{
    setCount(count+1);
      setCount(count+1);
    // setCount(previouscount=>previouscount+1);
    // setCount(previouscount=>previouscount+1); This is used to take the previous value and add in the previous value .
  
  }
  const decrease=()=>{
    setCount(count-1);
  }
  const reset=()=>{
   setCount(0);

  }

  const red=()=>{
    document.body.style.backgroundColor="red";
  }
  const blue=()=>{
    document.body.style.backgroundColor="blue";
  }
  const yellow=()=>{
    document.body.style.backgroundColor="yellow";
  }
  const black=()=>{
    document.body.style.backgroundColor="black";
  }
  const white=()=>{
    document.body.style.backgroundColor="white";
  }
  const green=()=>{
    document.body.style.backgroundColor="green";
  }
  const purple=()=>{
    document.body.style.backgroundColor="purple";
  }

  return (
    <>
      <h1 className='m-5 text-3xl text-white bg-red-700'>HEllo my name is pradeep tanwar .</h1>
<p className='text-3xl m-5 text-blue-700 font-bold'>{count}</p>
      <button className=' m-5  h-12 hover:border-blue-800 w-28 border-2 text-white bg-zinc-700' onClick={increase}>Increase value</button>
      <button className=' m-5  h-12 hover:border-blue-800 w-28 border-2 text-white bg-zinc-700' onClick={decrease}>Decrease value</button>
      <button className=' m-5  h-12 hover:border-blue-800 w-28 border-2 text-white bg-zinc-700' onClick={reset}>Reset value</button>


      <div className='container h-24 min-w-screen border-2 flex items-center '>
        <button className='m-5 h-12 w-28 border-2 rounded-md bg-red-600 text-white' onClick={red}>Red</button>
        <button className='m-5 h-12 w-28 border-2 rounded-md bg-blue-600 text-white' onClick={blue}>Blue</button>
        <button className='m-5 h-12 w-28 border-2 rounded-md bg-yellow-500 text-white' onClick={yellow}>Yellow</button>
        <button className='m-5 h-12 w-28 border-2 rounded-md bg-black text-white' onClick={black}>Black</button>
        <button className='m-5 h-12 w-28 border-2 rounded-md bg-purple-600 text-white' onClick={purple}>Voilet</button>
        <button className='m-5 h-12 w-28 border-2 rounded-md bg-white text-black' onClick={white}>White</button>
        <button className='m-5 h-12 w-28 border-2 rounded-md bg-green-600 text-white' onClick={green}>green</button>
      </div>
    </>
  )
}

export default App
