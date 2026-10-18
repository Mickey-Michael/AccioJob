import { useContext } from "react"
import { MyContext } from "../Utils/AuthContext"

const Profile = () => {

    const {log,setLog} = useContext(MyContext)

  return (
    <div className="w-screen h-screen text-center ">

        <h1 className="text-7xl">{log ? "Welcome, Mickey" : "Please Login"}</h1>

        <button className="text-3xl border p-2 bg-blue-700 rounded"
            onClick={() => {
            setLog(prev => !prev)
        }}>{log ? "" : "Login"}</button>

    </div>
  )
}

export default Profile