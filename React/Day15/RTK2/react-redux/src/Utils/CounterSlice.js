import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name : "Mickey",
    initialState : 0,
    reducers : {
        increment : (state, action) => {
            return state + 1
        },
        reset : (state, action) => {
            return 0
        },
        decrement : (state, action) => {
            if(state == 0) return
            return state - 1
        }
    }
})

export default CounterSlice.reducer
export const {increment,decrement,reset} = CounterSlice.actions
