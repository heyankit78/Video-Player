import { createSlice } from "@reduxjs/toolkit";



const searchSliceNew = createSlice({
    name : 'search',
    initialState : {},
    reducers:{
        cacheResults : (state,action) =>{
            state = Object.assign(state,action.payload)
        }
    }

})

export const {cacheResults} = searchSliceNew.actions
export default searchSliceNew.reducer;