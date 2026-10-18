import { useContext } from "react"
import { MyContext } from "../Utils/AuthContext"

const Navbar2 = () => {

    const {log, setLog} = useContext(MyContext)

  return (
    <div className="flex justify-between p-4 bg-pink-500">
        <div className="flex gap-3">
            <h1>FaceBook</h1>
            <p>{log ? "Mickey" : "Guest"}</p>
        </div>
        

        <div className="border bg-blue-400 text-white">
            <button onClick={() => {
                setLog(prev => !prev)
            }}>{log ? "Logout" : "Login"}</button>
        </div>
    </div>
  )
}

export default Navbar2