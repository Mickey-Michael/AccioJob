import { useState } from "react"
import Child from "./Child"
import { useCallback } from "react"



const Parent = () => {

    const [count ,setCount] = useState(0)
    const [count1 ,setCount1] = useState(0)
    
    console.log("Parent Render")

    const incrementCount = useCallback(() => {
    setCount1(prev => prev + 1)
  }, [])

  return (
    <div>
        <h1>{count}</h1>
        <h1>{count1}</h1>

        <button onClick={() => {
            setCount(prev => prev + 1)
        }}>increment</button>

        <Child  onIncrement={incrementCount}  />
    </div>
  )
}

export default Parent