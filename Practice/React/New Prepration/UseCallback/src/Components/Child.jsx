import { memo } from "react"

const Child = ({onIncrement}) => {

    console.log("Child Render")

  return (
    <div>
        <button onClick={onIncrement}>increment</button>
    </div>
  )
}

export default memo(Child)