import { createSelector } from "@reduxjs/toolkit";

export const getTodos = (state) => state.todo.todos;
export const getFilter = (state) => state.todo.filter;

export const getTodosFilter = createSelector(
    getTodos,
    getFilter,
    (todos, filter) => {
        if (filter === "all") return todos;
        return filter === "active"
            ? todos.filter(todo => todo.status)
            : todos.filter(todo => !todo.status)
    }
);
