import Counter from "./Components/Counter"
import Text from "./Components/Text"
import Sidebar from "./Components/Sidebar"

const App = () => {
  return (

    <div style={{display : "flex"}}>

      <Sidebar/>
      
      <div>
  
        <Counter/>
        <hr/>
        <Text/>
      
      </div>

    </div>
  )
}

export default App