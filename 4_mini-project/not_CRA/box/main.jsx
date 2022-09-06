const Box = () => {
    let initialColor = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

    let [colors, setColors] = React.useState(initialColor);

    let addBox = () => {
        setColors([...colors, ...initialColor]);
    }

    let deleteBox = index => {
        let newColors = colors.filter((color, i) => i != index);
        setColors(newColors);
    }

    return (
        <div className="wrap">
            <h1> JS DOM</h1>
            <button id="btn" onClick={addBox}>More boxes</button>
            <h4 id="score">
                Total box:<span className="points">{colors.length}</span>
            </h4>

            <div className="boxes">
                {colors.map((color, index) => (
                    <div
                        className="box"
                        key={index}
                        style={{ backgroundColor: color }}
                        onClick={() => {
                            deleteBox(index);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Box />);
