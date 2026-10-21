const {createStore, combineReducers} = require("redux")

const buycake = "BUY_CAKE"
const restock = "RESTOCK_CAKE"
const buyice = "BUY_ICECREAM"
const restockice = "RESTOCK_ICECREAM"

function BUY_CAKE(q)
{
    return {
        type : buycake,
        payload : q || 1

    }
}

function RESTOCK_CAKE()
{
    return {
        type : restock,
    }
}

function BUY_ICE(q)
{
    return {
        type : buyice,
        payload : q || 1
    }
}

function RESTOCK_ICE()
{
    return {
        type : restockice
    }
}

const initalcake = {
    numofcake : 20
}

const initalice = {
    numofice : 50
}

const cakereducer = (state = initalcake, action) => {
    switch(action.type)
    {
        case buycake :
            if(action.payload > state.numofcake)
            {
                return state
            }
            return {
                numofcake : state.numofcake - action.payload
            }
        case restock :
            return {
                numofcake : 20
            }
        default :
           return state
    }
}

const icecreamReducer = (state = initalice, action) => {
    switch(action.type)
    {
        case buyice :
            if(action.payload > state.numofice)
            {
                return {
                    numofcake : state.numofice - state.numofice
                }
            }
            return {
                numofice : state.numofice - action.payload
            }
        case restockice : 
            return {
                numofice : 50
            }
        default :
           return state
    }
}

const rootReducer = combineReducers({
    cake : cakereducer,
    icecream : icecreamReducer
})

const Store = createStore(rootReducer)

Store.subscribe(() => {
    console.log(Store.getState())
})

Store.dispatch(BUY_CAKE(8))

Store.dispatch(BUY_CAKE(21))

Store.dispatch(BUY_ICE(21))

Store.dispatch(RESTOCK_CAKE())
Store.dispatch(RESTOCK_ICE())

