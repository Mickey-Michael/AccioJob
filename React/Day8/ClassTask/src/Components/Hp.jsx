import { useEffect, useState } from "react"

const Hp = () => {

    const [data , setDta] = useState([])

    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setDta(data)
        })
    }, [])


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

                        <img src={item.image} alt="" />
                        <h1 className="text-2xl">{item.name}</h1>

                    </div>
                )
            })
        }

    </div>
  )
}

export default Hp
