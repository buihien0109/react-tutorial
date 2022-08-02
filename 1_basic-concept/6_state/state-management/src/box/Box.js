import React, { useState } from "react";
import "./style.css";

function Box() {
    const colorsDefault = [
        "#3498db",
        "#9b59b6",
        "#e74c3c",
        "#2c3e50",
        "#d35400",
    ];
    const [colors, setColors] = useState(colorsDefault);

    const handleMoreBox = () => {
        setColors([...colors, ...colorsDefault]);
    }

    const handleDeleteBox = index => {
        let newColors = colors.filter((c, i) => i !== index);
        setColors(newColors);
    }

    return (
        <div className="wrap">
            <h1> JS DOM</h1>
            <button id="btn" onClick={() => handleMoreBox()}>More boxes</button>
            <h4 id="score">
                Total box:<span className="points">{colors.length}</span>
            </h4>

            <div className="boxes">
                {colors.map((c, i) => (
                    <div
                        key={i}
                        className="box"
                        style={{ backgroundColor: c }}
                        onClick={() => handleDeleteBox(i)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Box;
