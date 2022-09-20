import React from 'react'

function Button(props) {
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
}

export default Button