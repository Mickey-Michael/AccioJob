import { useDispatch, useSelector } from "react-redux"
import { BUY_ICECREAM, RESTOCK_ICECREAM } from "../Utils/Icecream"
import { useRef } from "react"

const Icecream = () => {

    const val = useSelector((store) => {
        return store.icecream.numoficecream
    })

    const dispatch = useDispatch()

    const ipref = useRef()

  return (
    <div>
        <h1>No of Ice Cream : {val}</h1>

        <input type="number" ref={ipref} />

        <button onClick={() => {
            dispatch(BUY_ICECREAM(ipref.current.value))
        }}>Buy IceCream</button>

        <button onClick={() => {
            dispatch(RESTOCK_ICECREAM())
        }}>Restock IceCream</button>

    </div>
  )
}

export default Icecream