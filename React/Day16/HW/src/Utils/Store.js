import {configureStore} from "@reduxjs/toolkit"
import listreducr from "./ListSlice"

export const Store = configureStore({
    reducer : {
        list : listreducr
    }
})