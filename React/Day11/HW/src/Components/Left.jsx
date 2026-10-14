import { useContext } from "react"
import { Modecontext } from "../App"

const Left = () => {

  const {mode ,setText} = useContext(Modecontext)

  return (
    <div className={"border w-1/2 h-[92vh] " + (mode ? "bg-white" : "bg-black")}>

      <input onChange={(e) => {
        setText(e.target.value)
      }} className="border" type="text" />

    </div>
  )
}

export default Left