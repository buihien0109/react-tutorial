import React, { useState } from 'react'

const numbers = [1, 2, 3, 4];

function Counter() {
    // Nếu có các tính toán phức tạp để khởi tạo state => Sử dụng callback function trong useState()
    // let total = numbers.reduce((a, b) => a + b, 0);
    // console.log(total)

    const [count, setCount] = useState(() => {
        let total = numbers.reduce((a, b) => a + b, 0);
        console.log(total)

        return total;
    });

    const addCount = () => {
        // ReactJS sẽ nhóm các batch gọi setState() (gộp các lần gọi setState() gần nhau) thành một lần cập nhật.
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // Giải pháp
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={addCount}>Add</button>
        </div>
    )
}

export default Counter