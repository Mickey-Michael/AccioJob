import P from "./P"
import { useEffect } from "react"

const GP = () => {

    useEffect(() => {
        console.log("Gp Mounted")
    }, [])

  return (
    <div>
        <P/>
    </div>
  )
}

export default GP