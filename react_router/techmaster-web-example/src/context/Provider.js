import React, { useReducer } from 'react'
import Context from './Context'
import { courses, topics } from '../data/course-data'
import { users } from '../data/user-data'
import reducer, { initialState } from '../store/reducer'

function Provider({ children }) {
    const [cartItems, dispatch] = useReducer(reducer, initialState);
    const value = {
        courses,
        topics,
        users,
        cartItems,
        dispatch
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider