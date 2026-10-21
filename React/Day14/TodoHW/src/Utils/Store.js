import {combineReducers, createStore} from "redux"
import { listReducer } from "./Todo"
import { countReducer } from "./Counter"


const rootReducer = combineReducers({
    list : listReducer,
    counter : countReducer
})

export const Store = createStore(rootReducer)
