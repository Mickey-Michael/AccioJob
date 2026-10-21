const buycake = "BUY_CAKE"
const restockcake = "RESTOCK_CAKE"


export function BUY_CAKE(q)
{
    return {
        type : buycake,
        payload : q || 1
    }
}

export function RESTOCK_CAKE()
{
    return {
        type : restockcake
    }
}


const initalcake = {
    numofcake : 20
}

export const cakereducer = (state = initalcake, action) => {
    switch(action.type)
    {
        case buycake :
            if(action.payload > state.numofcake) return state
            return {
                numofcake : state.numofcake - action.payload
            }
        case restockcake :
            return {
                numofcake : 20
            }
        default :
            return state
    }
}