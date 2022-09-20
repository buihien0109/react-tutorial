import React from 'react'
import "./BmiApp.scss"

function BmiApp() {
    const [weight, setWeight] = React.useState("");
    const [height, setHeight] = React.useState("");
    const [bmi, setBmi] = React.useState(0);
    const [weightError, setWeightError] = React.useState("");
    const [heightError, setHeightError] = React.useState("");

    const calculateBmi = () => {
        if (validateField()) {
            let newBmi = weight / height ** 2;
            setBmi(newBmi);

            setWeightError("");
            setHeightError("");
        }
    };

    const validateField = () => {
        let isValidWeight = false;
        let isValidHeight = false;

        // validate weight
        if (weight == "") {
            setWeightError("Weight cannot be blank");
        } else if (weight <= 0) {
            setWeightError("Weight must be greater than 0");
        } else if (!Number(weight)) {
            setWeightError("Weight is not formatted correctly");
        } else {
            setWeightError("");
            isValidWeight = true;
        }

        // validate height
        if (height == "") {
            setHeightError("Height cannot be blank");
        } else if (height <= 0) {
            setHeightError("Height must be greater than 0");
        } else if (!Number(height)) {
            setHeightError("Height is not formatted correctly");
        } else {
            setHeightError("");
            isValidHeight = true;
        }

        return isValidWeight && isValidHeight;
    };
    return (
        <div className='bmi-app'>
            <div className="form-control">
                <input
                    type="text"
                    placeholder="Enter weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                {weightError != "" && (
                    <span className="text-danger">{weightError}</span>
                )}
            </div>
            <div className="form-control">
                <input
                    type="text"
                    placeholder="Enter height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                {heightError != "" && (
                    <span className="text-danger">{heightError}</span>
                )}
            </div>
            <div className="form-control">
                <button onClick={calculateBmi}>Calculate</button>
            </div>
            <div>
                {bmi != 0 && <h2>BMI : {bmi}</h2>}
            </div>
        </div>
    );
}

export default BmiApp