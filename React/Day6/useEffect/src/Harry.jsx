import { useEffect } from "react"
import { useState } from "react"

const api = 'https://hp-api.onrender.com/api/characters'

function Harry() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(api)
        .then((res) => {
            return res.json()
        })
        .then((d) => {
            return setData(d)
        })
    },[])

    

  return (
    <>
      <h1>Marvel character </h1>

      <div>
        {data.map((item) => {
            return <h1>{item.name}</h1>
        })}
      </div>
    </>
  )
}

export default Harry