import React, { useReducer } from 'react';
import authReducer, { initialAuth } from '../store/authReducer';
import userReducer, { initialUser } from '../store/userReducer';
import Context from './Context';

function Provider({ children }) {
    const [auth, dispatchAuth] = useReducer(authReducer, initialAuth);
    const [users, dispatchUser] = useReducer(userReducer, initialUser);

    const value = {
        users,
        dispatchUser,
        auth,
        dispatchAuth,
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider