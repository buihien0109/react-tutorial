import React, { useReducer, useState } from 'react'

/*
1. Initial state
2. Định nghĩa các action type
3. Tạo reducer
*/

// 1. Initial state
const initialState = 0;

// 2. Định nghĩa các action type
const ADD_COUNT = "ADD_COUNT";
const SUBTRACT_COUNT = "SUBTRACT_COUNT";

// 3. Tạo reducer
// reducer : Bản chất là 1 hàm có 2 tham số : state, action dùng để thay đổi state dự trên action
// state : state hiện tại
// action : hành động để thay đổi state
// - payload : Dữ liệu (option)
// - type : action type
const reducer = (state, action) => {
    console.log({ state, action })
    switch (action.type) {
        case ADD_COUNT: {
            return state + action.payload
        }
        case SUBTRACT_COUNT: {
            return state - action.payload
        }
        default: {
            throw new Error(`${action.type} invalid`)
        }
    }
}


function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState);

    const addCount = () => {
        // setCount(count => count + 1)
        dispatch({ type: ADD_COUNT, payload: 3 })
    }

    const subtractCount = () => {
        // setCount(count => count - 1)
        dispatch({ type: SUBTRACT_COUNT, payload: 3 })
    }

    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={addCount}>Cộng</button>
            <button onClick={subtractCount}>Trừ</button>
        </>
    )
}

export default Counter