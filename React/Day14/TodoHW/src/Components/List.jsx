import { useRef } from "react"
import {useDispatch } from "react-redux"
import { LIST } from "../Utils/Todo"


const List = () => {

    const dispatch = useDispatch()
    const ipref = useRef()
    const taref = useRef()


  return (
    <div style={{display : "flex"}}>
        <input ref={ipref} type="text" />
        <textarea ref={taref} ></textarea>

        <button onClick={() => {
            if(!ipref.current.value || !taref.current.value)
            {
                return
            }
            dispatch(LIST({
                title : ipref.current.value,
                disc : taref.current.value
            }))
            ipref.current.value = ""
            taref.current.value = ""
        }}>AddList</button>
    </div>
  )
}

export default List
