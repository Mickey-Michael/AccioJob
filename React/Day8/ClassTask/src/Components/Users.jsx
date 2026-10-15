import { useEffect, useState } from "react"


const Users = () => {

    const [data , setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
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
                return (
                    <div className="border" key={item.id}>
                        
                        <h1>{item.name}</h1>

                        <h2>{item.email}</h2>

                        <h2>{item.address.city}</h2>

                        <h2>{item.phone}</h2>

                        <h2>{item.website}</h2>

                    </div>
                )
            })
        }
    </div>
  )
}

export default Users
