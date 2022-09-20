import React, { useState, useRef } from 'react'

const COLORS = ["red", "green", "blue", "yellow", "pink"];
const randomColor = (currentColor) => {
    let newColor = currentColor;
    
    while (currentColor == newColor) {
        let rdIndex = Math.floor(Math.random() * COLORS.length);
        newColor = COLORS[rdIndex];
    }

    return newColor;
};
function ColorBox() {
    const [color, setColor] = React.useState(() => {
        let initColor =
            JSON.parse(localStorage.getItem("box_color")) || "black";
        return initColor;
    });

    const colorRef = React.useRef(null);

    const handleChangeColor = () => {
        // Lấy ra thông tin màu hiện tại đang được lưu
        let currentColor = colorRef.current;

        // Random ra màu khác với màu hiện tại
        let newColor = randomColor(currentColor);

        // Lưu lại màu
        colorRef.current = newColor;

        // Lưu lại màu mới
        setColor(newColor);

        // Lưu lại vào trong localStorage
        localStorage.setItem("box_color", JSON.stringify(newColor));
    };

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => {
                handleChangeColor();
            }}
        ></div>
    );
}

export default ColorBox