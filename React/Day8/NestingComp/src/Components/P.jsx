import C from "./C"
import { useEffect } from "react"

const P = () => {

    useEffect(() => {
        console.log("P Mounted")
    }, [])

  return (
    <div>
        <C/>
    </div>
  )
}

export default P