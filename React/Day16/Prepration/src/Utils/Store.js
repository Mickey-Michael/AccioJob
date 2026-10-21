import {configureStore } from "@reduxjs/toolkit"
import listreducer  from "./ListSaice"

export const Store = configureStore({
    reducer : {
        List : listreducer
    }
})
