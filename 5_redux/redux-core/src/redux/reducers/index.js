import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
})

export default rootReducer;