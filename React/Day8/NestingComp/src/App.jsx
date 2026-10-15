import { useEffect } from "react"
import GP from "./Components/GP"

const App = () => {

  useEffect(() => {
    console.log("App Mounted")
  }, [])

  return (
    <div>
      <GP/>
    </div>
  )
}

export default App