import { useState } from "react"

const Home = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  return (
    <div>
      <h1>{count}</h1>
      
      <button onClick={() => {
        setCount(count + Number(step))
      }}>+</button>
    
      <input 
        className="border" 
        type="number" 
        value={step}
        onChange={(e) => setStep(e.target.value)}
      />

      <button onClick={() => {
        setCount(count - Number(step))
      }}>-</button>
    </div>
  )
}

export default Home