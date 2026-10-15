import { Routes, Route, Link } from "react-router-dom"
import Home from "./Components/Home"
import Services from "./Components/Services"
import Experiences from "./Components/Experiences"
import Erorr from "./Components/Erorr"


const App = () => {
  return (
    <div>

      <nav>

        <Link to="/Home">Home</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Experiences">Experiences</Link>

      </nav>
      
      <Routes>

        <Route path="/Home" element={<Home/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Experiences" element={<Experiences/>}/>
        <Route path="*" element={<Erorr/>}/>

      </Routes>
    </div>
  )
}

export default App
