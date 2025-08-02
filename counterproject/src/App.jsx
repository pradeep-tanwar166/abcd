import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

const [count, setcount] = useState(0)

const [background, setbackground] = useState('dark')

const Theme=()=>{
    document.body.style.color="white"
if(background==="dark"){
 document.body.style.backgroundColor="red"
 setbackground('light')
  
}
else{
    document.body.style.backgroundColor="blue"
  
    setbackground("dark")
}
}

const addvalue=()=>{
  setcount(count+1);
}

const Removevalue=()=>{
  setcount(count-1);
}
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value:{count}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={Removevalue}>Remove value</button>

      <button onClick={Theme} >Change {background}</button>
   
    </>
  )
}

export default App
