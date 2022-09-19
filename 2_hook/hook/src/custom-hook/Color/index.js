import useColor from "./useColor";

function Color() {

    const [color, changeColor] = useColor();

    return (
        <div
            style={{ width: 200, height: 200, backgroundColor: color, margin: "auto", marginTop: 100 }}
            onClick={changeColor}
        ></div>
    );
}

export default Color;
