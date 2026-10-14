import { useContext } from "react"
import GP from "./Components/GP"
import { CounterContext } from "../Utils/CounterContext"

const App = () => {

  const {count, setCount }  = useContext(CounterContext)

  return (

    <div>

      <button onClick={() => {
        setCount(count + 1)
      }}>+</button>

      <GP/>
    </div>
  )
}

export default App
