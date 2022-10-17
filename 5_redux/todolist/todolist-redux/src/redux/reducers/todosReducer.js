// Tạo init state
const initState = [
    { id: 1, title: "Làm việc nhà", status: false },
    { id: 2, title: "Làm bài tập", status: true },
    { id: 3, title: "Ăn trưa", status: false },
];

// Tạo reducer
const todosReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            return [...state, action.payload]
        }
        case "UPDATE_TODO": {
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, ...action.payload }
                }
                return todo
            })
        }
        case "DELETE_TODO": {
            return state.filter(todo => todo.id !== action.payload)
        }
        default: {
            return state;
        }
    }
};

export default todosReducer