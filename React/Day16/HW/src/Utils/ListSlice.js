import {createSlice} from "@reduxjs/toolkit"

const ListSlice = createSlice({
    name : "Mickey",
    initialState : [],
    reducers : {
        addlist : (state, action) => {
            // return [...state, action.payload]
            let flag = false

            const temp = state.map((item) => {
                if(item.id == action.payload.id)
                {
                    flag = true

                    return {
                    ...item,
                    quantity : item.quantity + 1
                    }
                }
                else
                {
                    return item
                }
            })
            
            if(!flag)
            {
                temp.push({
                    ...action.payload,
                    quantity : 1
                })
            }

            return temp
        }
    }
})

export default ListSlice.reducer
export const {addlist} = ListSlice.actions