import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "../features/TodoList/todos.service";
import todosReducer from "../features/TodoList/todos.slice";

const store = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
        todoList: todosReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware),
});

export default store;
