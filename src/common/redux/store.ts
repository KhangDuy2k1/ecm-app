import { configureStore } from "@reduxjs/toolkit";
import searchTextSlice from "./slice/search";
export const store = configureStore({
    reducer: {
       search: searchTextSlice
    }
})