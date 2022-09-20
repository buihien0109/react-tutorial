import { useState, useRef } from "react";

const colors = ["red", "blue", "green", "yellow"];
const randomColor = (currentColor) => {
    let newColor = currentColor

    while (newColor == currentColor) {
        let index = Math.floor(Math.random() * colors.length);
        newColor = colors[index];
    }
    return newColor;
}


const useColor = () => {
    const [color, setColor] = useState("red");

    const colorRef = useRef();

    // Xử lý đổi màu
    const changeColor = () => {
        let newColor = randomColor(colorRef.current);
        colorRef.current = newColor;
        setColor(newColor);
    }

    return [color, changeColor];
}

export default useColor;