import { ADD_COUNT, SUBTRACT_COUNT, DELETE_PRODUCT, ADD_PRODUCT } from "./constants";

// 1. Initial state
export const initialState = [];

// 2. Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return [...state, action.payload]
        }
        case ADD_COUNT: {
            const { id } = action.payload;
            let newState = state.map((product) => {
                return product.id === id
                    ? { ...product, count: product.count + 1 }
                    : product;
            });
            return newState
        }
        case SUBTRACT_COUNT: {
            const { id } = action.payload;
            let newState = state.map((product) => {
                return product.id === id
                    ? { ...product, count: product.count - 1 }
                    : product;
            });
            return newState
        }
        case DELETE_PRODUCT: {
            const { id } = action.payload;
            let newState = state.filter(product => product.id !== id)
            return newState
        }
        default: {
            return state;
        }
    }
};

export default reducer;