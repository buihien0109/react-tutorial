const Tip = () => {
    const [bill, setBill] = React.useState(0);
    const [tipPercent, setTipPersent] = React.useState(15);
    const [numberOfPeople, setNumberOfPeople] = React.useState(1);

    const calculateTotalTip = () => {
        return (Number(bill) / 100) * tipPercent;
    };

    const calculateTotal = () => {
        return calculateTotalTip() + Number(bill);
    };

    return (
        <div className="container">
            <section>
                <div className="wrapper">
                    <label htmlFor="bill" className="lbl">
                        Bill
                    </label>
                    <div className="input-box">
                        <span>$</span>
                        <input
                            type="text"
                            value={bill}
                            id="bill"
                            className="val"
                            onChange={(e) => setBill(e.target.value)}
                        />
                    </div>
                </div>
                <div className="wrapper">
                    <span className="lbl">Tip</span>
                    <span id="tip-amount" className="val">
                        ${calculateTotalTip()}
                    </span>
                </div>
                <hr />
                <div className="wrapper">
                    <span className="lbl">Total Amount</span>
                    <span id="total-amount" className="val">
                        ${calculateTotal()}
                    </span>
                </div>
            </section>
            <section>
                <div className="wrapper">
                    <label htmlFor="tip" className="lbl">
                        Tip %
                    </label>
                    <span id="tip-percent" className="val">
                        {tipPercent}%
                    </span>
                </div>
                <input
                    type="range"
                    min="1"
                    id="tip"
                    value={tipPercent}
                    onChange={(e) => setTipPersent(e.target.value)}
                />

                <div className="wrapper">
                    <label htmlFor="no-of-people" className="lbl">
                        No. Of People
                    </label>
                    <span id="split-num" className="val">
                        {numberOfPeople}
                    </span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="15"
                    id="no-of-people"
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                />
            </section>
            <section>
                <div className="wrapper">
                    <span className="lbl">Tip Per Person</span>
                    <span id="tip-per-person" className="val">
                        ${calculateTotalTip() / numberOfPeople}
                    </span>
                </div>
                <div className="wrapper">
                    <span className="lbl"> Total Per Person </span>
                    <span id="total-per-person" className="val">
                        ${calculateTotalTip()}
                    </span>
                </div>
            </section>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Tip />);
