// import namm from "./Components/app"
// import kuchto from "./Components/app"
// import {age} from "./Components/app"
// import {city as jagah} from "./Components/app"

// function App()
// {
//     return ( 
//         <>
//           <h1>Mickey {namm}</h1>
//           <h2>Mickey {kuchto}</h2>
//           <h2>i am {age} and live in {jagah}</h2>

        


//         </>
//     )
// }

// export default App



import MainContent from "./Components/MainContent";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar from "./Components/sidebar";

function App()
{
    return (
        <>

        <Navbar/>

        <div style={{display : "flex"}}>
            <Sidebar/>
            <MainContent/>

        </div>


        <Footer/>

        </>
    )
}

export default App