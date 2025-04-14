import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
// import postReducer from "./postSlice";

const store = configureStore({
    reducer: {
        auth: authSlice
    }
});

export default store;
