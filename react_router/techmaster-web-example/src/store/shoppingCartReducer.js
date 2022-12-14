import {
    ADD_COUNT,
    SUBTRACT_COUNT,
    DELETE_PRODUCT,
    ADD_PRODUCT,
    CLEAR_CART,
} from "./constants";

// 1. Initial state
export const initialCart =
    JSON.parse(localStorage.getItem("cart-items")) || [];

// 2. Reducer
const shoppingCartReducer = (state, action) => {
    let newState = [];
    switch (action.type) {
        case ADD_PRODUCT: {
            newState = [...state, action.payload];
            break;
        }
        case ADD_COUNT: {
            const { id } = action.payload;
            newState = state.map((product) => {
                return product.id === id
                    ? { ...product, count: product.count + 1 }
                    : product;
            });
            break;
        }
        case SUBTRACT_COUNT: {
            const { id } = action.payload;
            newState = state.map((product) => {
                return product.id === id
                    ? { ...product, count: product.count - 1 }
                    : product;
            });
            break;
        }
        case DELETE_PRODUCT: {
            const { id } = action.payload;
            newState = state.filter((product) => product.id !== id);
            break;
        }
        case CLEAR_CART: {
            newState = [];
            break;
        }
        default: {
            newState = [...state];
            break;
        }
    }

    localStorage.setItem("cart-items", JSON.stringify(newState));
    return newState;
};

export default shoppingCartReducer;
