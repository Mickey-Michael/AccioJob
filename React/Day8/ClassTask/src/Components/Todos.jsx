import { useEffect, useState } from "react"


const Todos = () => {

    const [data , setData] = useState([])

    useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/todos/")
       .then((res) => {
           return res.json()
       })
       .then((data) => {
         console.log(data)
         setData(data)
       })
    },[])

    if(data.length == 0)
    {
        return <h1>Loading...</h1>
    }

  return (
    <div>
        {
            data.map((item) => {
                return <h1 className="border" key={item.id}>{item.title}</h1>
            })
        }
    </div>
  )
}

export default Todos
