import { createContext, useState } from "react"
import One from "./Components/One"

export const MyContext = createContext()

const App = () => {

  const [naam , SetNaam] = useState("")
  const [lastnaam, SetLastNaam] = useState("")

  return (
    <MyContext.Provider value={{naam , lastnaam}}>

       <div>
      
        <input onChange={(e) => {
          SetNaam(e.target.value)
        }} type="text" />
  
        <input onChange={(e) => {
          SetLastNaam(e.target.value)
        }} type="text" />

        <One/>

      </div>

    </MyContext.Provider>
   
  )
}

export default App
