import Navbar from "./Components/Navbar"
import {Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import Profile from "./Components/Profile"
import About from "./Components/About"
import Error from "./Components/Error"


const App = () => {
  return (
    <div>
      
      <Navbar/>


      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<Error/>}/>

      </Routes>
      
    </div>
  )
}

export default App