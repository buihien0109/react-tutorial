import React, { useReducer } from 'react'
import TodoContext from './Context'
import reducer, { initialTodos } from './reducer'

function Provider({ children }) {
    const [todos, dispatch] = useReducer(reducer, initialTodos)

    return (
        <TodoContext.Provider value={[todos, dispatch]}>
            {children}
        </TodoContext.Provider>
    )
}

export default Provider