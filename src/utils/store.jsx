import { configureStore } from "@reduxjs/toolkit";
import appSliceNew from "./appSlice"
import searchSliceNew from "./searchSlice"

const store = configureStore({
    reducer : {
        app : appSliceNew,
        search : searchSliceNew
    }
})

export default store;