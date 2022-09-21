import React from 'react'
import Context from './Context'
import { courses, topics } from '../data/data'

function Provider({ children }) {
    return (
        <Context.Provider value={{ courses, topics }}>
            {children}
        </Context.Provider>
    )
}

export default Provider