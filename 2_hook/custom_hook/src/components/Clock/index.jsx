import React from "react";
import PropTypes from "prop-types";
import useClock from "../../hooks/useClock";

function Clock() {
    const { timeString } = useClock();
    
    return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

Clock.propTypes = {};

export default Clock;
