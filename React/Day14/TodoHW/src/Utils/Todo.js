const addlist = "LIST"

export function LIST(s)
{
    return {
        type : addlist,
        payload : s
    }
}

const initallist = {
    data : []
}

export const listReducer = (state = initallist, action) => {
    switch(action.type)
    {
        case addlist :
            return {
                data : [...state.data,action.payload]
            } 
        default :
           return state
    }
}