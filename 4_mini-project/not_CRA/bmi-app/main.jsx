const BMI = () => {
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
        let isValid = true;
        // validate weight
        if (weight == "") {
            setWeightError("Weight cannot be blank");
            isValid = false;
        } else if (weight <= 0) {
            setWeightError("Weight must be greater than 0");
            isValid = false;
        } else if (!Number(weight)) {
            setWeightError("Weight is not formatted correctly");
            isValid = false;
        } else {
            setWeightError("");
        }

        // validate height
        if (height == "") {
            setHeightError("Height cannot be blank");
            isValid = false;
        } else if (height <= 0) {
            setHeightError("Height must be greater than 0");
            isValid = false;
        } else if (!Number(height)) {
            setHeightError("Height is not formatted correctly");
            isValid = false;
        } else {
            setHeightError("");
        }

        return isValid;
    };
    return (
        <>
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
                {bmi && <h2>BMI : {bmi}</h2>}
            </div>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BMI />);
