import React, { useEffect, useRef, useState } from "react";
import video1 from "./video.mp4";

const COLORS = ["red", "blue", "green", "yellow"];
const randomColor = (currentColor) => {
    let newColor = currentColor;

    while (newColor == currentColor) {
        let index = Math.floor(Math.random() * COLORS.length);
        newColor = COLORS[index];
    }
    return newColor;
};

function Content() {
    const [value, setValue] = useState("");
    const [time, setTime] = useState(200);
    const [color, setColor] = useState("red");

    const inputRef = useRef();
    const videoRef = useRef();
    const countRef = useRef(0);
    const timeRef = useRef();
    const colorRef = useRef();

    // VD1
    // component mount => focus ô input
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // VD2
    // Mỗi khi component render thì tăng current lên 1
    countRef.current++;

    // VD3
    // Xử lý play video
    const handlePlay = () => {
        videoRef.current.play();
    };

    // Xử lý pause video
    const handlePause = () => {
        videoRef.current.pause();
    };

    // VD4
    // Xử lý start time
    const handleStart = () => {
        timeRef.current = setInterval(() => {
            setTime((time) => time - 1);
        }, 1000);
    };

    // Xử lý stop time
    const handleStop = () => {
        clearInterval(timeRef.current);
    };

    // VD5
    // Xử lý đổi màu
    const changeColor = () => {
        let newColor = randomColor(colorRef.current);
        colorRef.current = newColor;
        setColor(newColor);
    };

    return (
        <div>
            <h1>Render : {countRef.current}</h1>

            <hr />

            <div
                style={{ width: 200, height: 200, backgroundColor: color }}
                onClick={changeColor}
            ></div>

            <h1>Time : {time}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

            <br />

            <input
                placeholder="Enter name"
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <br />

            <video src={video1} width={200} ref={videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>

            {/* {console.log("render")} */}
        </div>
    );
}

export default Content;
