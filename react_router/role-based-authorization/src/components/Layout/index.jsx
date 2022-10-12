import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

function Layout() {
    return (
        <>
            <Header bg="#000"/>

            <Outlet />

            <Footer />
        </>
    );
}

export default Layout;
