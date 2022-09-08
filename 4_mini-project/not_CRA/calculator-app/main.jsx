const Calculator = () => {
    const [input, setInput] = React.useState("");

    const handleClear = () => {
        setInput("");
    };

    const handleEqual = () => {
        let result = eval(input);
        setInput(result);
    };

    const addToInput = (character) => {
        setInput(input + character);
    };

    return (
        <div className="app">
            <div className="calc-wrapper">
                <input type="text" className="input" defaultValue={input} />
                <div className="row">
                    <Button handleClick={addToInput}>7</Button>
                    <Button handleClick={addToInput}>8</Button>
                    <Button handleClick={addToInput}>9</Button>
                    <Button handleClick={addToInput}>/</Button>
                </div>
                <div className="row">
                    <Button handleClick={addToInput}>4</Button>
                    <Button handleClick={addToInput}>5</Button>
                    <Button handleClick={addToInput}>6</Button>
                    <Button handleClick={addToInput}>*</Button>
                </div>
                <div className="row">
                    <Button handleClick={addToInput}>1</Button>
                    <Button handleClick={addToInput}>2</Button>
                    <Button handleClick={addToInput}>3</Button>
                    <Button handleClick={addToInput}>+</Button>
                </div>
                <div className="row">
                    <Button handleClick={addToInput}>.</Button>
                    <Button handleClick={addToInput}>0</Button>
                    <Button handleClick={() => handleEqual()}>=</Button>
                    <Button handleClick={addToInput}>-</Button>
                </div>
                <div className="row">
                    <button className="clear-btn" onClick={() => handleClear()}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

const Button = (props) => {
    const { children, handleClick } = props;

    const isOperator = (value) => {
        let operators = ["+", "-", "*", "/", "=", "."]
        return operators.includes(value);
    };

    return (
        <button
            className={`button-wrapper ${isOperator(children) ? "operator" : ""}`}
            onClick={() => handleClick(children)}
        >
            {children}
        </button>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Calculator />);
