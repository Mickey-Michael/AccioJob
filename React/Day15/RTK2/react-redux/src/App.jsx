import { useDispatch, useSelector } from "react-redux"
import {increment, reset, decrement} from "./Utils/CounterSlice"

const App = () => {

  const val = useSelector((store) => {
    return store.Counter
  })

  const dispatch = useDispatch()

  return (
    <div>
      <h1>{val}</h1>

      <button onClick={() => {
        dispatch(increment())
      }}>+</button>
      <button onClick={() => {
        dispatch(reset())
      }}>0</button>
      <button onClick={() => {
        dispatch(decrement())
      }}>-</button>
    </div>
  )
}

export default App

