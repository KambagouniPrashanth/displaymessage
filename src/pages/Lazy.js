import React, { useState } from 'react'

function Lazy() {
  const[number1,setNumber1]=useState("")
  const[number2,setNumber2]=useState("")
  const[result,setResult]=useState("")

  function sumofnumbers(){
    let num1=parseInt(number1,10)
    let num2=parseInt(number2,10)
    //lazy loading
    import('../utils/sum').then((module)=>{
      let res=module.default(num1,num2)
      //it must be called module.default there is one default in one component if we give more then one default functions it will show error
      // let res=module.sumby10(num1)
      // console.log(res)
    
    setResult(res)

    })
    


  }


  return (
    <div className='lazy'>
      <h1>Dynamic imports</h1>
      <p>
        <input type='number' placeholder='enter a number' value={number1} onChange={(e)=>setNumber1(e.target.value)}/>
      </p>
      <p>
        <input type='number' placeholder='enter a number' value={number2} onChange={(e)=>setNumber2(e.target.value)}/>
      </p>
      <p>
        <button onClick={sumofnumbers}>Submit</button>
      </p>
      <p>
        Result:{result}
      </p>
    </div>
  )
}

export default Lazy