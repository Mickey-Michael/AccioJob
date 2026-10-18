import { useState } from "react"
import { useMemo } from "react"
import Pro from "./Components/Pro"


const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const App = () => {

  const [no, setNo] = useState("0")
  const [count, setCount] = useState(0)

  const ans = useMemo(() => {
    const limit = no === "" ? 0 : Number(no)

    return arr.filter((item) => {
      return item > limit
    })
  } ,[no])

  return (
    <div>

      <input value={no} onChange={(e) => {
        setNo(e.target.value)
        
      }} type="number" />

      <h1>{ans}</h1>

      <h1>{count}</h1>

      <button onClick={() => {
        setCount(prev => prev + 1)
      }}>Increment</button>

      <Pro/>

    </div>
  )
}

export default App
