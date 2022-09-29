import { ADD_COUNT, SUBTRACT_COUNT, DELETE_PRODUCT, ADD_PRODUCT } from "./constants"

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const addCount = (id) => {
    return {
        type: ADD_COUNT,
        payload: { id }
    }
}

export const subtractCount = (id) => {
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