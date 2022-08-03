import React from "react";
import PropTypes from "prop-types";
import useMagicColor from "../../hooks/useMagicColor";
import "./MagicBox.scss";

function MagicBox() {
    const { color } = useMagicColor();
    console.log(color);

    return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

MagicBox.propTypes = {};

export default MagicBox;
