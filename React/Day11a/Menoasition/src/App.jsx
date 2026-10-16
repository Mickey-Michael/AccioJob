import { useState } from "react"
import Parent from "./Components/Parent"

const App = () => {

  const [count , setCount] = useState(0)

  console.log("app")

  return (
    <div>

      <h1>{count}</h1>

      <button onClick={() => {
        setCount(count + 1)
      }}>+</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>-</button>
      <Parent/>
    </div>
  )
}

export default App