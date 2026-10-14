import { useContext } from "react"
import { Modecontext } from "./App"

const Navbar = () => {

  const {setMode} = useContext(Modecontext)

  return (
    <div className="flex justify-between bg-blue-400 p-4">
        <h1 className="text-2xl">Mickey</h1>

        <div className="flex gap-5 px-4">

            <button onClick={() => {
                setMode(true)
            }}>Light</button>
            <button onClick={() => {
                setMode(false)
            }}>Dark</button>

        </div>
    </div>
  )
}

export default Navbar
