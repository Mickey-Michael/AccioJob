import {createSlice} from "@reduxjs/toolkit"

const ListSlice = createSlice({
    name : "Mickey",
    initialState : [],
    reducers : {
        addlist : (state, action) => {
            return [...state, action.payload]
        }
    }
})

export default ListSlice.reducer
export const {addlist} = ListSlice.actions
