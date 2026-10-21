import { useDispatch, useSelector } from "react-redux"
import { BUY_CAKE, RESTOCK_CAKE } from "../Utils/Cake"
import { useRef } from "react"


const Cake = () => {

    const val = useSelector((store) => {
        return store.cake.numofcake
    })

    const dispatch = useDispatch()

    const ipref = useRef()

  return (
    <div>

        <h1>No of Cake : {val}</h1>

        <input ref={ipref} type="number" />

        <button onClick={() => {
            dispatch(BUY_CAKE(ipref.current.value))
        }}>Buy Cake</button>

        <button onClick={() => {
            dispatch(RESTOCK_CAKE())
        }}>Restock Cake</button>

    </div>
  )
}

export default Cake
