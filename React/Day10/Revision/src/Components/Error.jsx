import { useNavigate } from "react-router-dom"

const Error = () => {

  const nav = useNavigate()

  return (
    <div>
      <h1>404 not found</h1>

      <button onClick={() => {
        nav("/Home")
      }} className="border">Home</button>
      
    </div>
  )
}

export default Error