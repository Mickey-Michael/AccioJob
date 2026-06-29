
const Card = ({imgSrc, name}) => {

    return (    
        <div style={{border : "1px solid black",width : "fit-content"}}>    
            <img style={{width : "300px",height : "300px"}} src={imgSrc} alt="" />
            <p>{name}</p>
            
        </div>    
    
    )
}

export default Card
