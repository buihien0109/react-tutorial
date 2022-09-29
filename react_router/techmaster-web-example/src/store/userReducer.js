import { users } from "../data/user-data";
import { LOGIN, LOGOUT, UPDATE_PROFILE } from "./constants";


// 1. Initial state
export const initialUser = JSON.parse(localStorage.getItem("users")) || [...users];

// 2. Reducer
const userReducer = (state, action) => {
    console.log("userReducer : ", action)
    let newState = [];
    switch (action.type) {
        case UPDATE_PROFILE: {
            const userUpdate = action.payload
            newState = state.map(user => {
                if (user.id == userUpdate.id) {
                    return { ...user, ...userUpdate }
                }
                return user;
            });
            break;
        }
        default: {
            newState = [...state];
        }
    }
    localStorage.setItem("users", JSON.stringify(newState));
    return newState;
};

export default userReducer;
