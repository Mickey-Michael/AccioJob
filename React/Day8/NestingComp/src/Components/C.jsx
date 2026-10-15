import { useEffect } from "react"


const C = () => {

    useEffect(() => {
        console.log("C Mounted")
    }, [])

  return (
    <div>C</div>
  )
}

export default C