import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Users from "./Components/Users"
import Todos from "./Components/Todos"
import Hp from "./Components/Hp"
import Erorr from "./Components/Erorr"

const App = () => {
  return (
    <div>
      
      <Navbar/>

      <Routes>

        <Route path="/Users" element={<Users/>}/>
        <Route path="/Todos" element={<Todos/>}/>
        <Route path="/Hp" element={<Hp/>}/>
        <Route path="*" element={<Erorr/>}/>

      </Routes>

    </div>
  )
}

export default App
