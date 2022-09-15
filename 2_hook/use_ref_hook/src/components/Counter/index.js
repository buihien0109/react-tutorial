import React, { useEffect, useRef, useState } from 'react'

function Counter() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    })

    return (
        <div>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <h2>Counter : {count.current}</h2>
        </div>
    )
}

export default Counter