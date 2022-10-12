import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

function LayoutUser() {
    return (
        <>
            <Header bg="#664646" />

            <Outlet />
        </>
    );
}

export default LayoutUser;
