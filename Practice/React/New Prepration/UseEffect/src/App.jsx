import { useEffect, useState } from "react"
import ProductCard from "./Components/ProductCard"

const App = () => {

  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    document.title = `Count: ${count}`
  },[count])

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!res.ok)
        {
          throw new Error("Server Error")
        }
        const data = await res.json()
        setData(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    // fetch("https://jsonplaceholder.typicodecom/users")
    // .then((res) => {
    //   return res.json()
    // })
    // .then((data) => {
    //   setData(data)
    // })
    // .catch((er) => {
    //   setError(er.message)
    // })

    getdata()
  },[])

  if(loading)
  {
    return <h1>Loading...</h1>
  }

  if(error)
  {
    return <h1>{error}</h1>
  }


  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => {
        setCount(prev => prev + 1)
      }}>Increment</button>

      <button onClick={() => {
        setCount(0)
      }}>Reset</button>

      <button onClick={() => {
        setCount(prev => Math.max(0 ,prev - 1))
      }}>Decrement</button>


      {
        data.map((item) => {
          return (
            <ProductCard key={item.id} name={item.name} email={item.email} />
          )
        })
      }

    </div>
  )
}

export default App