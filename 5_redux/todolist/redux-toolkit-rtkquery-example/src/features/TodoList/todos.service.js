import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos",
        }),
        createTodo: builder.mutation({
            query: (data) => ({
                url: `/todos`,
                method: "POST",
                body: data,
            }),
        }),
        updateTodo: builder.mutation({
            query: (data) => ({
                url: `/todos/${data.id}`,
                method: "PUT",
                body: data,
            }),
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
            transformResponse: (response, meta, arg) => {
                console.log({ response, meta, arg })
                return arg;
            }
        }),
    }),
});

export const {
    useGetTodosQuery,
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = todoApi;
