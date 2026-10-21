const buyicecream = "BUY_ICECREAM"
const restockicecream = "RESTOCK_ICECREAM"


export function BUY_ICECREAM(q)
{
    return {
        type : buyicecream,
        payload : q || 1
    }
}

export function RESTOCK_ICECREAM()
{
    return {
        type : restockicecream
    }
}


const initalicecream = {
    numoficecream : 50
}



export const icecreamreducer = (state = initalicecream, action) => {
    switch(action.type)
    {
        case buyicecream :
            return {
                numoficecream : state.numoficecream - action.payload
            }
        case restockicecream :
            return {
                numoficecream : 50
            }
        default :
            return state
    }
}