import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

// Tạo init state
const initialState = [
    { id: 1, title: "Làm việc nhà", status: false },
    { id: 2, title: "Làm bài tập", status: true },
    { id: 3, title: "Ăn trưa", status: false },
];

// Tạo reducer
const todosSlice = createSlice({
    name: "todolist",
    initialState,
    reducers: {
        addTodo: (state, { payload }) => {
            state.push(payload);
        },
        deleteTodo: (state, { payload: id }) => {
            return state.filter(todo => todo.id !== id)
        },
        updateTodo: (state, { payload }) => {
            let updatedTodo = state.find(todo => todo.id === payload.id);
            updatedTodo.title = payload.title;
        },
        addTodoOther: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(newTodo) {
                return {
                    payload: {
                        id: v4(),
                        title: newTodo.title,
                        status: true
                    }
                }
            }
        },
    }
})

/*
const addTodo = (data) => {
    return {
        type : "todolist/addTodo"
        payload : data
    }
}
*/
export const { addTodo, deleteTodo, updateTodo, addTodoOther } = todosSlice.actions

export default todosSlice.reducer