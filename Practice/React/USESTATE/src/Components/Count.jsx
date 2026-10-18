import { useState } from "react"


const Count = () => {

      const [count ,setCount] = useState(0)


  return (
    <div >

       <h1 className="text-3xl">{count}</h1>

       <div className=" flex gap-5">

        <button onClick={() => {
           setCount(count + 1)
        }}>Increment</button>

        <button onClick={() => {
           setCount(0)
        }}>Rest</button>

        <button onClick={() => {
           if(count <= 0)
           {
             return setCount(0)
           }
           setCount(count - 1)
        }}>Decrement</button>

       </div>

      
    </div>
  )
}

export default Count