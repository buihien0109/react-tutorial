import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./constants"

export const initialTodos = [
    { id: 1, title: "Làm bài tập", status: false },
    { id: 2, title: "Đá bóng", status: true },
    { id: 3, title: "Nấu cơm", status: false },
];

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, { ...action.payload }];
        }
        case UPDATE_TODO: {
            const { id, title } = action.payload
            const newState = state.map((todo) =>
                todo.id === id
                    ? { ...todo, title: title }
                    : todo
            )
            return newState
        }
        case DELETE_TODO: {
            return state.filter((todo) => todo.id !== action.payload);
        }
        default: {
            throw new Error(`${action.type} invalid!`);
        }
    }
};

export default reducer;