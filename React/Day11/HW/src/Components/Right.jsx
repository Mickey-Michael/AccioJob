import { useContext } from "react"
import { Modecontext } from "../App"

const Right = () => {

  const {mode ,text} = useContext(Modecontext)
  
  return (
    <div className={"border w-1/2 h-[92vh] " + (mode ? "bg-white" : "bg-black")}>

      <h1>{text}</h1>
      
    </div>
  )
}

export default Right