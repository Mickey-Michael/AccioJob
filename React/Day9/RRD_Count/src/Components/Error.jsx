import { useNavigate } from "react-router-dom"

const Error = () => {

  const navigate = useNavigate()
  
  return (
    <div>
        <h1>404 - Page Not Found</h1>

        <button onClick={() => {
          navigate("/A")
        }}>Home</button>
    </div>
  )
}

export default Error
