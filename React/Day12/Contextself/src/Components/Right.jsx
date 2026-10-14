import { useContext } from "react"
import { Mycontext } from "../../Utils/Contextfile"

const Right = () => {

  const {text} = useContext(Mycontext)

  return (
    <div className="border h-screen w-[50vw]">
        <ul>
            {text.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default Right