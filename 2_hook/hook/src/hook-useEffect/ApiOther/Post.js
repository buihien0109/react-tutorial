import React, { useState, useEffect } from "react";
import fetch from "./fake-fetch";

function Post() {
    const [data, setData] = useState([]);

    // Giống componentDidMount : Chạy 1 lần duy nhất sau khi render
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        console.log("fetch api");

        (async () => {
            await fetch(`/api/posts`, {
                signal: signal,
            })
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch(err => console.log(err))
        })()

        return () => {
            // cancel the request before component unmounts
            controller.abort();
        };
    }, []);

    return (
        <div>
            {data.length == 0 && <h2>Fetch Data</h2>}
            {data.length > 0 && (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}

            {console.log("render")}
        </div>
    );
}

export default Post;
