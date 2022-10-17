export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: todo
    }
}
export const updateTodo = (updatedTodo) => {
    return {
        type: "UPDATE_TODO",
        payload: updatedTodo
    }
}
export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id
    }
}
