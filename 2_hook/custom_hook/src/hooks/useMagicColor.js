import { useRef } from "react";
import { useState, useEffect } from "react";

// Random ngẫu nhiên color không trùng nhau
function randomColor(currentColor) {
    const COLOR_LIST = ["red", "green", "blue", "pink", "yellow", "violet"];

    // Lấy index của color hiện tại
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;

    // Random color mới k trùng với color hiện tại
    while (newIndex == currentIndex) {
        newIndex = Math.floor(Math.random() * COLOR_LIST.length);
    }

    return COLOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState("transparent");
    const colorRef = useRef("transparent");

    useEffect(() => {
        const colorInterval = setInterval(() => {
            let newColor = randomColor(colorRef.current);
            setColor(newColor);

            // Lưu lại giá trị của color qua mỗi lần random
            colorRef.current = newColor;
        }, 1000);

        // Cần clean up (xóa interval) nếu component bị unmount
        return () => {
            clearInterval(colorInterval);
        };
    }, []);

    return { color };
}


export default useMagicColor;