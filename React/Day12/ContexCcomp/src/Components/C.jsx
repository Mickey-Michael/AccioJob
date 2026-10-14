import { useContext } from "react"
import { CounterContext } from "../../Utils/CounterContext"

const C = () => {

  const {count } = useContext(CounterContext)
  return (
    <div>{count}</div>
  )
}

export default C
