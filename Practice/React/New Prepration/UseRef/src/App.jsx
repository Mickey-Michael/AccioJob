import { useState } from "react"
import { useRef } from "react"

const App = () => {

  const ipref = useRef(null)
  const [count ,setCount] = useState(0)
  const countref = useRef(0)

  return (
    <div>

      <input ref={ipref} type="text" />

      <button onClick={() => {
        ipref.current.focus()
      }}>Focus</button>
      <button onClick={() => {
        ipref.current.value = ""
      }}>Clear</button>


      <div>

        <h1>{count}</h1>

        <button onClick={() => {
          countref.current = countref.current + 1
        }}>Increment</button>

        <button onClick={() => {
          setCount(countref.current)
        }}>Show Count</button>

        <button onClick={() => {
          countref.current = 0
          setCount(0)
        }}>Reset</button>

      </div>

    </div>
  )
}

export default App
