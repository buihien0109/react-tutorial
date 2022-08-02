import React, { useState } from "react";

function Theme() {
    // Danh sách theme
    const themes = [
        {
            colorHeading: "#2C3639",
            colorText: "#3F4E4F",
            bg: "#F9F5EB",
        },
        {
            colorHeading: "#EAE3D2",
            colorText: "#F9F5EB",
            bg: "#100720",
        },
    ];

    // Quản lý state theme
    const [selected, setSelected] = useState(0);

    // Xử lý phần chọn theme
    const handleChangeTheme = (event) => {
        setSelected(event.target.value);
    };

    return (
        <div style={{ backgroundColor: themes[selected].bg, padding: "20px" }}>
            <select value={selected} onChange={(e) => handleChangeTheme(e)}>
                <option value={0}>Light Theme</option>
                <option value={1}>Dark Theme</option>
            </select>

            <h2 style={{ color: themes[selected].colorHeading }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h2>
            <p style={{ color: themes[selected].colorText }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                placeat necessitatibus, vitae laboriosam in quos, nesciunt modi
                error sit porro, reprehenderit voluptatem dolore libero
                incidunt. Illo mollitia fugit quam inventore?
            </p>
        </div>
    );
}

export default Theme;
