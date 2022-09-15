import React, { useState, useEffect } from 'react'

// Side effect : là thuật ngữ trong lập trình phần mềm. chỉ các hiệu ứng tác động và biến đổi trạng thái state bên ngoài chương trình

// Ví dụ :
// - Cập nhật DOM
// - Gọi API
// - addEventListener, removeEventListener
// - subscribe và unsubscribe
// - ...

// useEffect(callback, [deps])
// 1. useEffect(callback)
// - Được gọi mỗi lần re-render

// 2. useEffect(callback, [])
// 3. useEffect(callback, [deps])

// --
// Điểm chung : Đều được gọi khi component mount

const types = ["posts", "comments", "albums"];

function Counter() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [type, setType] = useState("posts");
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Thay đổi DOM
    // useEffect(() => {
    //     document.title = count
    //     console.log("re-render")
    // })

    // Gọi API, nếu không có emtpy deps => setState liên tục => Gọi effect liên tục
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then(data => data.json())
    //         .then(data => setData(data))
    //         .catch(error => console.log(error));
    // })

    // Gọi API 1 lần
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then(data => data.json())
    //         .then(data => setData(data))
    //         .catch(error => console.log(error));
    // }, [])

    // Gọi API mỗi khi có sự thay đổi deps
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(data => data.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, [type])

    // Gọi API gắn sự kiện vào DOM
    useEffect(() => {
        console.log("addEvent")
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            console.log("unmount")
        }
    }, [])

    const addCount = () => {
        setCount(count + 1);
    }

    const changeType = (type) => {
        setType(type);
    }

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={addCount}>Add</button>

            {types.map(t => (
                <button
                    key={t}
                    style={t == type ? { backgroundColor: "black", color: "white" } : {}} onClick={() => changeType(t)}
                >{t}</button>
            ))}

            <h1>Type : {type}</h1>
            <ul>
                {data.map(v => <li key={v.id}>{v.title || v.name}</li>)}
            </ul>

            {showBackToTop && <button style={{ position: "fixed", bottom: "50px", right: "50px" }}>TOP</button>}

            {console.log("render")}
        </div>
    )
}

export default Counter