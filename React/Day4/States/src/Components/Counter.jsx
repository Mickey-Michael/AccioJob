import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <div>{count}</div>
        
            <div>
              <button onClick={() => {
                setCount(count + 1)
              }}>+</button>
              <button onClick={() => {
                setCount(0)
              }}>R</button>
              <button onClick={() => {
                setCount(count - 1)
              }}>-</button>
            </div>
    </>
    )
}

export default Counter
