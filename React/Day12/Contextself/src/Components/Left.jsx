import { useContext, useRef } from "react"
import { Mycontext } from "../../Utils/Contextfile"


const Left = () => {

  const {text, setText} = useContext(Mycontext)
  const ipref = useRef()

  return (
     <div className="border h-screen w-[50vw]">

        <input ref={ipref} className="border" type="text" />
        
        <button onClick={() => {
            setText([...text ,ipref.current.value])
        }}>Add</button>

    </div>
  )
}

export default Left