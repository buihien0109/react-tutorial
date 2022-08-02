import React, { useState } from "react";
import "./ColorBox.scss";

const randomColor = () => {
    const COLORS = ["red", "green", "blue", "green", "pink"];
    let index = Math.floor(Math.random() * COLORS.length);
    return COLORS[index];
};

function ColorBox() {
    // Cách 1 : Tránh tình trạng bị gọi nhiều lần
    // let initColor = JSON.parse(localStorage.getItem("box-color")) || "black";
    // const [color, setColor] = useState(initColor);

    // Cách 2 : Chỉ gọi 1 lần
    const [color, setColor] = useState(() => {
        let initColor =
            JSON.parse(localStorage.getItem("box_color")) || "black";
        return initColor;
    });

    // Xử lý khi click vào box -> random màu mới -> Lưu vào trong localStorage
    const handleChangeColor = () => {
        let newColor = randomColor();
        setColor(newColor);

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

export default ColorBox;
