import { useContext } from "react"
import { Mycontext } from "../Utils/Context"

const Content = () => {

    const { thame } = useContext(Mycontext)
    console.log(thame)

  return (
    <div className={`w-screen h-screen ${thame ? "bg-white text-black" : "bg-black text-white"}`} >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates et aperiam eaque facere totam consequuntur, eum quam, officia neque placeat modi, soluta sunt quod in enim laborum. Quia, esse explicabo?
    </div>
  )
}

export default Content