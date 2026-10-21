import {useSelector } from "react-redux"

const Display = () => {

    const val = useSelector((store) => {
        return store.list.data
    })

  return (
    <div>
        {
            val.map((item,index) => {
                return (
                    <div key={index}>
                         <h1 >{item.title}</h1>
                         <h2>{item.disc}</h2>
                    </div>
                ) 
            })
        }
    </div>
  )
}

export default Display
