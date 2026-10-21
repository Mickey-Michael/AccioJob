import { Routes,Route } from "react-router-dom"
import Cart from "./Components/Cart"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"


const App = () => {

  return (
    <div >

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="*" element={ <h1>loading...</h1>}/>

      </Routes>
      
    </div>
  )
}

export default App
