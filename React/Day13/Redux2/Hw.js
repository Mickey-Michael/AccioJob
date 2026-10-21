const { createStore } = require("redux")

const increment = "COUNT_INCREMENT"
const reast = "COUNT_REAST"
const decrement = "COUNT_DECREMENT"

function COUNT_INCREMENT(q)
{
    return {
        type : increment,
        payload : q || 1
    }
}

function COUNT_REAST()
{
    return {
        type : reast
    }
}

function COUNT_DECREMENT(q)
{
    return {
        type : decrement,
        payload : q || 1
    }
}

const initalcount = {
    count : 0
}

const countreducer = (state = initalcount, action) => {
    switch(action.type)
    {
        case increment : 
            return {
                count : state.count + action.payload
            }
        case reast : 
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

const Store = createStore(countreducer)

Store.subscribe(() => {
    console.log(Store.getState())
})

Store.dispatch(COUNT_INCREMENT())
Store.dispatch(COUNT_INCREMENT(3))
Store.dispatch(COUNT_INCREMENT())
Store.dispatch(COUNT_INCREMENT(2))
Store.dispatch(COUNT_INCREMENT())


Store.dispatch(COUNT_DECREMENT(5))

Store.dispatch(COUNT_REAST())