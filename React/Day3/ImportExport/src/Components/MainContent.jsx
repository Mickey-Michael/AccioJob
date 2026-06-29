import Card from "./Card"

function MainContent()
{
    return (

        
        <main style={{height : "80vh",width : "80vw",backgroundColor : "yellow",display : "grid", gridTemplateColumns : "repeat(3,1fr)",gap : "20px"}}>

            <Card price = {100} name = "mickey"/>
            <Card price = {100} name = "bike"/>
            <Card price = {100} name = "ac"/>
            <Card price = {100} name = "cooler"/>
            <Card price = {100} name = "pankha"/>
            <Card price = {100} name = "botal"/>

           
        </main>
        

        
    )
}

export default MainContent