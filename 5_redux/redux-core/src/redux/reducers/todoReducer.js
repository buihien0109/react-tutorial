// Tạo init state
const initState = [
    { id: 1, title: "Làm việc nhà" },
    { id: 2, title: "Làm bài tập" },
    { id: 3, title: "Ăn trưa" },
];

// Tạo reducer
const todoReducer = (state = initState, action) => {
    console.log({ state, action });

    switch (action.type) {
        case "ADD_TODO": {
            return [...state, action.payload]
        }
        default: {
            return state;
        }
    }
};

export default todoReducer