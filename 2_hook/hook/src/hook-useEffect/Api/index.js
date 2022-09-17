import React, { useEffect, useState } from 'react'

const options = ["posts", "comments", "albums"];

function Api() {
    const [data, setData] = useState([]);
    const [type, setType] = useState("posts")

    // Giống componentDidMount : Chạy 1 lần duy nhất sau khi render
    useEffect(() => {
        console.log("fetch api")

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json));
    }, [type]);

    return (
        <div>
            {options.map(option => (
                <button
                    key={option}
                    onClick={() => setType(option)}
                    style={type == option ? { color: "#fff", backgroundColor: "#000" } : {}}
                >{option}</button>
            ))}

            <h1>Type : {type}</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title || item.name}</li>
                ))}
            </ul>

            {console.log("render")}
        </div>
    )
}

export default Api