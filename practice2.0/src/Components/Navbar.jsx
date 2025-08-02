import React from 'react'

function Navbar(props) {
  return (
    <div>
     <div className='h-24 max-w-screen border-2  flex justify-center gap-16 items-center'>
      <a className=' text-blue-500 text-xl ' href="Home">Home</a>
      <a href="Home">Home</a>
      <a href="Home">Home</a>
      <a href="Home">Home</a>
      <a href="Home">Home</a>
      <button className='bg-blue-500 p-3 rounded-2xl text-white ' onClick={props.togglemode}>Background</button>
     </div>
    </div>
  )
}

export default Navbar
