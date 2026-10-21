import { useDispatch, useSelector } from "react-redux"
import { MINUS, PLUS, REST } from "../Utils/Counter"

const Counter = () => {

    const val = useSelector((store) => {
        return store.counter.count
    })

    const dispatch = useDispatch()

    return (
    <div>
        <h1>{val}</h1>

        <button onClick={() => {
            dispatch(PLUS())
        }}>Increment</button>
        <button onClick={() => {
            dispatch(REST())
        }}>Rest</button>
        <button onClick={() => {
            dispatch(MINUS())
        }}>Decrement</button>

    </div>
  )
}

export default Counter