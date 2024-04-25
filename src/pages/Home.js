import React, { useRef, useState } from 'react'

function Home() {
  const nameinput=useRef()
  const [result,setResult]=useState("")

  const handlesubmit=()=>{
    setResult(nameinput.current.value)
    console.log(nameinput)

    
  }
  const handleInput=()=>{
    nameinput.current.focus();
  }
  return (
    <div className='home'>
      <p>
        <input type='text' placeholder='Enter a Name' ref={nameinput}/>
      </p>
      <p>
        <button onClick={handlesubmit}>Submit</button>
      </p>
      <p>
        <button onClick={handleInput}>Focus Input</button>
      </p>
      <p>
        Your name:{result}
      </p>
    </div>
  )
}

export default Home