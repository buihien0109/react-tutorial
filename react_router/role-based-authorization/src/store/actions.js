import {
    LOGIN,
    LOGOUT, SYNC_AUTH, UPDATE_PROFILE
} from "./constants";

// Auth
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

// User
export const updateProfile = (data) => {
    return {
        type: UPDATE_PROFILE,
        payload: data
    };
};