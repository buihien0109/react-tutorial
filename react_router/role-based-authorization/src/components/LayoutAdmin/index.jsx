import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

function LayoutAdmin() {
    return (
        <>
            <Header bg="#286b4c" />

            <Outlet />
        </>
    );
}

export default LayoutAdmin;
