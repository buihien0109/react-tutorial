import React, { useEffect, useState } from 'react'

// Cú pháp : useEffect(callback, [deps])
// Các trường hợp sử dụng
// 1. useEffect(callback)
// - Được chạy lại mỗi khi re-render lại component
// 2. useEffect(callback, [])
// - Được chạy 1 lần duy nhất sau lần render đầu tiên
// 3. useEffect(callback, [deps])
// - Được chạy mỗi khi có sự thay đổi về dependence (props, state)

// Chung
// - Được chạy 1 lần sau khi render
function Content() {
    const [count, setCount] = useState(0);
    const [isShow, setIsShow] = useState(false);

    // 1. useEffect(callback)
    // Được chạy sau mỗi lần
    useEffect(() => {
        console.log("mounted");
    })

    // 2. useEffect(callback, [])
    useEffect(() => {
        console.log("mounted []");
    }, [])

    // 3. useEffect(callback, [deps])
    useEffect(() => {
        console.log("mounted [deps]");
        if (count == 5) {
            setIsShow(true);
        } else {
            setIsShow(false);
        }
    }, [count])

    const addCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter {count}</h1>
            {isShow && <h2>Hello</h2>}
            <button onClick={addCount}>Add</button>
            {console.log("render")}
        </div>
    )
}

export default Content