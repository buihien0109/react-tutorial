import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [
            { id: 1, title: "Làm bài tập React", status: true },
            { id: 2, title: "Đá bóng với bạn bè", status: false },
            { id: 3, title: "Đi chơi với gấu", status: true },
        ],
        filter: "all",
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        deleteTodo: (state, action) => {
            const { id } = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
        },
        toggleStatus: (state, action) => {
            const { id } = action.payload;
            state.todos = state.todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, status: !todo.status };
                }
                return todo;
            });
        },
        editTodo: (state, action) => {
            const { id, title } = action.payload;
            state.todos = state.todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, title };
                }
                return todo;
            });
        },
        clearAll: (state) => {
            state.todos = [];
        },
    },
});

export const {
    setFilter,
    addTodo,
    deleteTodo,
    toggleStatus,
    editTodo,
    clearAll,
} = todoSlice.actions;

export default todoSlice.reducer;
