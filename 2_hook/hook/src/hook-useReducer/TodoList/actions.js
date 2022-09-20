import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./constants";

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

export const editTodo = (payload) => {
    return {
        type: UPDATE_TODO,
        payload,
    };
};

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    };
};
