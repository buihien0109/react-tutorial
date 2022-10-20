import { createSlice } from "@reduxjs/toolkit";
import { todoApi } from "./todos.service";

const todoSlice = createSlice({
    name: "todoList",
    initialState: {
        status: "",
        todos: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(todoApi.endpoints.getTodos.matchPending, (state) => {
            state.status = "pending";
        });
        builder.addMatcher(
            todoApi.endpoints.getTodos.matchFulfilled,
            (state, action) => {
                state.status = "fulfilled";
                state.todos = action.payload;
            }
        );
        builder.addMatcher(
            todoApi.endpoints.getTodos.matchRejected,
            (state) => {
                state.status = "rejected";
            }
        );
        builder.addMatcher(
            todoApi.endpoints.createTodo.matchFulfilled,
            (state, action) => {
                state.todos.push(action.payload);
            }
        );
        builder.addMatcher(
            todoApi.endpoints.updateTodo.matchFulfilled,
            (state, action) => {
                let index = state.todos.findIndex(
                    (todo) => todo.id === action.payload.id
                );
                state.todos[index] = action.payload;
            }
        );
        builder.addMatcher(
            todoApi.endpoints.deleteTodo.matchFulfilled,
            (state, action) => {
                let index = state.todos.findIndex(
                    (todo) => todo.id === action.payload.id
                );
                state.todos.splice(index, 1)
            }
        );
    },
});

export default todoSlice.reducer;
