import Todo from "./Components/Todo"
import Product from "./Components/Product"
import Navbar from "./Components/Navbar"
import Count from "./Components/Count"
import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import Cart from "./Components/Cart"


const App = () => {

  const [p, setP] = useState([])

  console.log(p)

  return (
    <div>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Count/>}/>
        <Route path="/Todo" element={<Todo/>}/>
        <Route path="/Product" element={<Product setP={setP}  />}/>
        <Route path="/Cart" element={<Cart p={p}/>}/>

      </Routes>
    </div>
  )
}

export default App