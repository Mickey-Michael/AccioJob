import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addlist } from "./Utils/ListSaice"

const App = () => {

    const val = useSelector((store) => {
        return store.List
    })

    const ipref = useRef()

    const dispatch = useDispatch()

  return (
    <div>

        <input ref={ipref} type="text" />

        <button onClick={() => {
            if(ipref.current.value == "") return
            dispatch(addlist(ipref.current.value))
            ipref.current.value = ""
        }}>ADD LIST</button>

        <ul>
            {
                val.map((item,index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
        
    </div>
  )
}

export default App
