import todoReducer from "./reducers/todoSlice";
import counterReducer from "./reducers/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    }
})

export default store;