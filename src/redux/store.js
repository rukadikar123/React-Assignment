import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./ProfileSlice.js"

export const store=configureStore({
    reducer:ProfileReducer
})