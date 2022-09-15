import React, { useRef, useState } from 'react'

function Time() {
    const [time, setTime] = useState(60);
    const timeRef = useRef(0);
    const h1Ref = useRef(null);

    console.log(h1Ref);

    const handleStart = () => {
        if (!timeRef.current) {
            timeRef.current = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000)

        }

        console.log(timeRef.current)
    }

    const handleStop = () => {
        console.log(timeRef.current)
        clearInterval(timeRef.current);

        timeRef.current = 0;
    }

    return (
        <div>
            <h1 ref={h1Ref}>Xin chao</h1>
            <div>Time : {time}</div>

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Time