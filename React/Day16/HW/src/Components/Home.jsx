import {useState,useEffect} from "react"
import Card from "./Card"


const Home = () => {

    const [er, setEr] = useState("")
    const [data, setData] = useState(null)
    const [loader, setLoader] = useState(true)

  useEffect(() => {

    const getdata = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products")
        if(!res.ok)
        {
          throw new Error("Server Timeout")
        }
        const data = await res.json()
        setData(data.products)
      } catch (error) {
        setEr(error.message)
      }finally{
        setLoader(false)
      }
    }

    getdata()
  },[])


  if(er)
  {
    return <h1>Error : {er}</h1>
  }

  if(loader)
  {
    return <h1>Loading...</h1>
  }

  
  return (
    <div className="grid grid-cols-4 gap-5 p-2 text-center">
      {
        data.map((item) => {
          return <Card key={item.id} item={item}/>
        })
      }
      
    </div>
    
  )
}

export default Home