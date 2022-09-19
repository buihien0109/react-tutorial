import React, { useContext } from "react";
import Post from "./Post";
import { ThemeContext } from "./ThemeContext/ThemeContext";

// 1. Tạo Context => createContext() - Có thể tạo nhiều Context, muốn sử dụng ở component khác => export
// 2. Provider : Cung cấp dữ liệu cho context, sử dụng props value={}
// 3. Consumer : Lấy dữ liệu từ context sử dụng => useContext([context])

function Theme() {
    const context = useContext(ThemeContext);
    console.log(context);

    return (
        <>
            <button onClick={context.toggleTheme}>Toggle theme</button>
            <Post />
        </>
    );
}

export default Theme;
