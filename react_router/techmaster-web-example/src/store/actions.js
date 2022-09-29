import {
    ADD_COUNT,
    SUBTRACT_COUNT,
    DELETE_PRODUCT,
    ADD_PRODUCT,
    LOGIN,
    LOGOUT,
    UPDATE_PROFILE,
    SYNC_AUTH,
} from "./constants";

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
};

export const addCount = (id) => {
    return {
        type: ADD_COUNT,
        payload: { id },
    };
};

export const subtractCount = (id) => {
    return {
        type: SUBTRACT_COUNT,
        payload: { id },
    };
};

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: { id },
    };
};

export const login = (data) => {
    return {
        type: LOGIN,
        payload: data,
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};

export const syncAuth = (data) => {
    return {
        type: SYNC_AUTH,
        payload: data
    };
};

export const updateProfile = (data) => {
    return {
        type: UPDATE_PROFILE,
        payload: data
    };
};
