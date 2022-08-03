import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Function format date theo định dạng HH:MM:SS
function formatDate(date) {
    if (!date) {
        return "";
    }

    let hours = `0${date.getHours()}`.slice(-2);
    let minutes = `0${date.getMinutes()}`.slice(-2);
    let seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
    const [timeString, setTimeString] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            let now = new Date();
            let newTimeString = formatDate(now);

            setTimeString(newTimeString);
        }, 1000);

        // Cần clean up (xóa interval) nếu component bị unmount
        return () => {
            console.log("Clean up");
            clearInterval(interval);
        };
    }, []);

    return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

Clock.propTypes = {};

export default Clock;
