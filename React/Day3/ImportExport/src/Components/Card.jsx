// function Card(props)
// {
//     return (
//         <article style={{backgroundColor : "darkblue"}}>
//             <h1>{props.name}</h1>
//             <p>{props.price}</p>

//         </article>
//     )
// }

// export default Card

function Card(props)
{
    const {name,price} = props

    return (
        <article style={{backgroundColor : "darkblue"}}>
            <h1>{name}</h1>
            <p>{price}</p>

        </article>
    )
}

export default Card

// function Card({name,price})
// {
    

//     return (
//         <article style={{backgroundColor : "darkblue"}}>
//             <h1>{name}</h1>
//             <p>{price}</p>

//         </article>
//     )
// }

// export default Card