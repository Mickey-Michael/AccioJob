import { useState } from "react"

const Sidebar = () => {

    const [sbar,setsbar] = useState(false)
    
    return (
        <aside 
           onMouseEnter={() => {
            setsbar(true)
           }}
           onMouseLeave={() => {
            setsbar(false)
           }}
           style={{height : "100vh", 
                  width : sbar ? "20vw" : "5vw", 
                  backgroundColor : "orange"
            }}>

        </aside>
    )
}

export default Sidebar