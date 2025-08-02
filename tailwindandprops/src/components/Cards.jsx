import React from 'react'

function Cards(props) {
    console.log(props);
  return (
    <div>
      <div className=" m-5 h-56 w-28 border-2 rounded-sm ">
<img className="h-44 w-full object-fit" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwcGVyc29ufGVufDB8fDB8fHww" alt="Not found image"/>
<h1 className="text-center flex items-center justify-center text-sm mt-1">{props.name}</h1>
</div>

    </div>
  )
}

export default Cards
