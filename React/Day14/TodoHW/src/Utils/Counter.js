const increment = "PLUS"
const rest = "REST"
const decrement = "MINUS"

export function PLUS(q)
{
    return {
        type : increment,
        payload : q || 1
    }
}

export function REST()
{
    return {
        type : rest
    }
}

export function MINUS(q)
{
    return {
        type : decrement,
        payload : q || 1
    }
}

const initalcount = {
    count : 0
}

export const countReducer = (state = initalcount, action) => {
    switch(action.type)
    {
        case increment :
            return {
                count : state.count + action.payload
            }
        case rest : 
            return {
                count : 0
            }
        case decrement :
            return {
                count : state.count - action.payload
            }
        default :
            return state
    }
}