import React, { useState, useCallback } from "react";
import Section from "./Section";

function Blog() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    const [user, setUser] = useState({
        id: 1,
        name: "Bùi hiên"
    });

    const addCount = () => {
        setCount(count + 1);
    };

    const addCount1 = () => {
        setCount1(count1 + 1);
    };

    // function là kiểu object (reference type) => mỗi khi component re-render => Tạo object mới
    // const handleClick = () => {
    //     console.log("Handle click")
    // }

    // SOLUTION : Sử dụng useCallback()
    // useCallback : Tránh tạo lại function nếu không có sự thay đổi về deps
    // useCallback : const func = useCallback(callbackFunction, [deps])
    const handleClick = useCallback(() => {
        console.log("Handle click")
    }, [count])

    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={addCount}>Add</button>

            <h1>Counter1 : {count1}</h1>
            <button onClick={addCount1}>Add</button>

            <hr />

            <Section handleClick={handleClick} count={count} />
        </>
    );
}

export default Blog;
