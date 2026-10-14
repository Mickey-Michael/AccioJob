import { createContext, useState } from "react"
import Four from "./Four"

export const CountContext = createContext()

const Three = () => {

    const [count ,SetCount] = useState(0)
  return (
    <CountContext.Provider value={{count}}>
       <div>
        <h1>THREE</h1>

        <button onClick={() => {
            SetCount(count + 1)
        }}>Increment</button>

        <Four/>
    </div>
        
    </CountContext.Provider>
    
  )
}

export default Three