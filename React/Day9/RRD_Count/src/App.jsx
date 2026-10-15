import Navbar from "./Components/Navbar"
import { Routes, Route} from "react-router-dom"
import A from "./Components/A"
import B from "./Components/B"
import C from "./Components/C"
import Error from "./Components/Error"

const App = () => {
  return (
    <div>
      
      <Navbar/>

      <Routes>

        <Route path="/A" element={<A/>}/>
        <Route path="/B" element={<B/>}/>
        <Route path="/C" element={<C/>}/>
        <Route path="*" element={<Error/>}/>

      </Routes>
    </div>
  )
}

export default App