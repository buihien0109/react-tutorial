const Counter = () => {
    const [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState("#333333");

    const plusCount = () => {
        setCount(count + 1);
    };

    const minusCount = () => {
        setCount(count - 1);
    };

    const changeColor = () => {
        if (count > 0) {
            setColor("green");
        } else if (count == 0) {
            setColor("#333333");
        } else {
            setColor("red");
        }
    };

    // Sử dụng Hook khi có sự thay đổi giá trị của count
    React.useEffect(() => {
        changeColor();
    }, [count])

    return (
        <div className="main-container">
            <h1 className="title">Đếm số</h1>
            <h1 id="counter" style={{ color: color }}>
                {count}
            </h1>
            <div className="btn-container">
                <button
                    className="btn counterBtn prevBtn"
                    onClick={() => {
                        minusCount();
                    }}
                >
                    Trừ
                </button>
                <button
                    className="btn counterBtn nextBtn"
                    onClick={() => {
                        plusCount();
                    }}
                >
                    Cộng
                </button>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Counter />);
