import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./slice/search";
export const store = configureStore({
    reducer: {
       category: CategorySlice
    }
})