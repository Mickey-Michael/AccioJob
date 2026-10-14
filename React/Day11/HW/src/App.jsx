import { createContext, useState } from "react"
import Left from "./Components/Left"
import Right from "./Components/Right"
import Navbar from "./Navbar"

export const Modecontext = createContext()

const App = () => {

  const [mode , setMode] = useState(true)
  const [text , setText] = useState("")

  return (
    <Modecontext.Provider value={{mode, setMode , text, setText}}>

      <div>
      
        <Navbar/>
  
        <div className=" flex ">
  
          <Left/>
          <Right/>
  
        </div>

    </div>
    </Modecontext.Provider>
    
  )
}

export default App