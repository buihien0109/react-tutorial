
import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slice/usersSlice";

const store = configureStore({
    reducer: {
        users: usersSlice
    }
})

export default store;