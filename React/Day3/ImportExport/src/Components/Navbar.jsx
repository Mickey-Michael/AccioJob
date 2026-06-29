function Navbar()
{
    return (
        <nav style={{height : "10vh" ,display : "flex", justifyContent : "space-between",backgroundColor : "blue",padding : "0 10px"}}>

            <h1 style={{marginTop : "0px"}}>Mickey</h1>

            <div style={{marginTop : "10px",display : "flex",gap: "20px" }}>
                <a href="">A</a>
                <a href="">B</a>
                <a href="">C</a>
            </div>

        </nav>
    )
}

export default Navbar