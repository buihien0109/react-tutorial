import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Xử lý lấy danh sách công việc
export const getTodosApi = createAsyncThunk("todos/getTodosApi", async () => {
    const response = await axios.get("http://localhost:3001/todos");
    return response.data;
});

// Xử lý thêm công việc
export const addTodoApi = createAsyncThunk("todos/addTodoApi", async (data) => {
    const response = await axios.post("http://localhost:3001/todos", data);
    return response.data;
});

// Xử lý cập nhật công việc
export const updateTodoApi = createAsyncThunk(
    "todos/updateTodoApi",
    async (data) => {
        const response = await axios.put(
            `http://localhost:3001/todos/${data.id}`,
            data
        );
        return response.data;
    }
);

// Xử lý xóa công việc
export const deleteTodoApi = createAsyncThunk(
    "todos/deleteTodoApi",
    async (id) => {
        await axios.delete(`http://localhost:3001/todos/${id}`);
        return id;
    }
);

// Tạo reducer
const todosSlice = createSlice({
    name: "todolist",
    initialState: {
        status: "idle",
        todos: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodosApi.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getTodosApi.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.status = "idle";
            })
            .addCase(addTodoApi.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(updateTodoApi.fulfilled, (state, action) => {
                let index = state.todos.findIndex(
                    (todo) => todo.id === action.payload.id
                );
                state.todos[index] = action.payload
            })
            .addCase(deleteTodoApi.fulfilled, (state, action) => {
                state.todos = state.todos.filter(
                    (todo) => todo.id !== action.payload
                );
            });
    },
});

export default todosSlice.reducer;
