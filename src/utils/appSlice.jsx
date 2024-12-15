import {createSlice } from "@reduxjs/toolkit";
const appSliceNew = createSlice({
    name : "app",
    initialState : {
        isMenuOpenFlag : true
    },
    reducers : {
        toggleMenu : (state) => {
            state.isMenuOpenFlag = !state.isMenuOpenFlag
        },
        closeMenu : (state) => {
            state.isMenuOpenFlag = false
        }
    }
})

export const {toggleMenu,closeMenu} = appSliceNew.actions
export default appSliceNew.reducer