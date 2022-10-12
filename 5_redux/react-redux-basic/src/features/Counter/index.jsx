import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../reducers/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter);
    console.log(count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <>
            <div className="text-center">
                <h1 className="mb-3">Counter : {count}</h1>
                <button className="btn btn-warning mx-2" onClick={handleIncrement}>
                    Increment
                </button>
                <button className="btn btn-warning mx-2" onClick={handleDecrement}>
                    Decrement
                </button>
            </div>
        </>
    );
}

export default Counter;
