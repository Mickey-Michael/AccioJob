import { useContext } from "react"
import { Mycontext } from "../Utils/Context"

const Navbar = () => {

    const {thame, setThame} = useContext(Mycontext)
    

  return (
    <nav className={`flex p-4 justify-between ${thame ? "bg-white text-black" : "bg-black text-white"}`}>
        <h1 className="text-2xl">Mickey</h1>

        <div>
            <button className="border rounded p-1 bg-blue-500 text-white" onClick={() => {
                setThame(prev => !prev)
            }}>{thame ? "Light Mode" : "Dark Mode"}</button>
        </div>
    </nav>
  )
}

export default Navbar