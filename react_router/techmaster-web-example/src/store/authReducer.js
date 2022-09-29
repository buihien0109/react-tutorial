import { LOGIN, LOGOUT, SYNC_AUTH } from "./constants";


// 1. Initial state
export const initialAuth =
    JSON.parse(localStorage.getItem("auth")) || {};

// 2. Reducer
const authReducer = (state, action) => {
    console.log("authReducer : ", action)
    let newState = [];
    switch (action.type) {
        case LOGIN: {
            newState = action.payload;
            break;
        }
        case LOGOUT: {
            newState = {};
            break;
        }
        case SYNC_AUTH: {
            newState = { ...state, ...action.payload }
            break;
        }
        default: {
            newState = { ...state }
            break;
        }
    }

    localStorage.setItem("auth", JSON.stringify(newState));
    return newState;
};

export default authReducer;
