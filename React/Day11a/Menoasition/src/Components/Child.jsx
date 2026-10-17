import { memo, useCallback, useState } from "react"

const Child = () => {

  const [data, setData] = useState("")
  const [no, setNo] = useState(10)

  const btnhandler = useCallback(function()
  {
    return alert(`Hello ${data}`)
  }, [data])

    console.log("Child")
  return (
    <div>
      
      <button onClick={btnhandler}>hi</button>

      <input onChange={(e) => {
        setNo(e.target.value)
      }} type="text" />

      <input onChange={(e) => {
        setData(e.target.value)
      }} type="text" />

      <h1>{data}</h1>

    </div>
  )
}

export default memo(Child)