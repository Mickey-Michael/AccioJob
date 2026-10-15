import { useRef, useState } from "react"

const Profile = () => {

  const [count , setCount] = useState(0)

  const ip = useRef()
  
  return (
    <div>

      <h1>{count}</h1>
      
      <button onClick={() => {
        setCount(count + Number(ip.current.value))
      }}>+</button>
    
      <input ref={ip} className="border" type="number" />

      <button onClick={() => {
        setCount(count - ip.current.value)
      }}>-</button>

    </div>
  )
}

export default Profile