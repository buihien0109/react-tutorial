import React, { useReducer } from 'react'
import Context from './Context'
import { courses, topics } from '../data/course-data'
import shoppingCartReducer, { initialCart } from '../store/shoppingCartReducer'
import authReducer, { initialAuth } from '../store/authReducer'
import userReducer, { initialUser } from '../store/userReducer'

function Provider({ children }) {
    const [cartItems, dispatchCart] = useReducer(shoppingCartReducer, initialCart);
    const [auth, dispatchAuth] = useReducer(authReducer, initialAuth);
    const [users, dispatchUser] = useReducer(userReducer, initialUser);

    const value = {
        courses,
        topics,
        users,
        dispatchUser,
        cartItems,
        dispatchCart,
        auth,
        dispatchAuth
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider