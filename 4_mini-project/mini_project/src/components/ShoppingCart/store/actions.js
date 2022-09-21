import { ADD_COUNT, SUBTRACT_COUNT, DELETE_PRODUCT } from "./constants"

export const addCount = (id) => {
    return {
        type: ADD_COUNT,
        payload: { id }
    }
}

export const substractCount = (id) => {
    return {
        type: SUBTRACT_COUNT,
        payload: { id }
    }
}

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: { id }
    }
}