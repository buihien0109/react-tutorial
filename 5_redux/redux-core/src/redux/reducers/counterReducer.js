// Tạo init state
const initState = 0;

// Tạo reducer
const counterReducer = (state = initState, action) => {
    console.log({ state, action });

    switch (action.type) {
        case "ADD": {
            return state + 1;
        }
        case "SUBTRACT": {
            return state - 1;
        }
        default: {
            return state;
        }
    }
};

export default counterReducer;