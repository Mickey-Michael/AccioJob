import { useContext } from "react"
import { MyContext } from "../App"
import { CountContext } from "./Three"

const Four = () => {

    const {naam, lastnaam} = useContext(MyContext)

    const {count} = useContext(CountContext)
  return (
    <div>
        <h1>Name is : {naam}</h1>
        <h1>Last Name is {lastnaam}</h1>

        <h1>Count is : {count}</h1>
    </div>
  )
}

export default Four