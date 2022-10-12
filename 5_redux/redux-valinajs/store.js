import rootReducer from "./reducers/index.js";

const { createStore } = window.Redux;

const store = createStore(rootReducer)

export default store;