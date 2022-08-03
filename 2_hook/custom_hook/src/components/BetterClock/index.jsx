import React from "react";
import PropTypes from "prop-types";
import useClock from "../../hooks/useClock";
import "./BetterClock.scss";

function BetterClock() {
    const { timeString } = useClock();

    return <div className="better-clock">{timeString}</div>;
}

BetterClock.propTypes = {};

export default BetterClock;
