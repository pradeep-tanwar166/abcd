import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const user={
    name:"pradeep",
    age:19,
  }

  return (
    <>
      <h1 className='bg-red-400 transition duration-500 ease-in-out cursor-pointer hover:bg-blue-600  hover:rotate-360 '>Tailwind test</h1>
      <div className='flex'>
      <Cards name="pradeep" username={user}></Cards>
      <Cards name="funsuk bangdu"></Cards>
      <Cards name="Royal kich"></Cards>
      
      </div>
    </>
  )
}

export default App
