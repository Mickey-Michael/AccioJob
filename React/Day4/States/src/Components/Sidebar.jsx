import { useState } from "react"

const Sidebar = () => {

    const [sbar,setsbar] = useState(false)
    
    return (
        <aside 
           onMouseEnter={() => {
            setsbar(true)
           }}
           style={{height : "100vh", width : "20vw", backgroundColor : "orange"}}>

        </aside>
    )
}


export default Sidebar