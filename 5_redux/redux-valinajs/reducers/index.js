import counterReducer from "./counter.js";
import todoReducer from "./todo.js";

const { combineReducers } = window.Redux;

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
})

export default rootReducer;