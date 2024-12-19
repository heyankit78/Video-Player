import { configureStore } from "@reduxjs/toolkit";
import appSliceNew from "./appSlice"
import searchSliceNew from "./searchSlice"
import chatSlice from "./chatSlice"

const store = configureStore({
    reducer : {
        app : appSliceNew,
        search : searchSliceNew,
        chat : chatSlice
    }
})

export default store;