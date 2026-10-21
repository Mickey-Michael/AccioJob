import { combineReducers, createStore } from "redux"
import { cakereducer } from "./Cake"
import { icecreamreducer } from "./Icecream"

const rootReducer = combineReducers({
    cake : cakereducer,
    icecream : icecreamreducer
})

export const Store = createStore(rootReducer)
