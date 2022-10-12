import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Context from "../../../context/Context";
import routers from "../../../router/routers";
import AccessDenied from "../../error/AccessDenied";

function PrivateRoutes({ roles }) {
    const { auth } = useContext(Context);
    let location = useLocation();

    const { pathname } = location;
    const routeInfo = routers.find((r) => r.path === pathname);

    const authHasRequiredRole =
        auth.id && routeInfo.roles.some((r) => auth.roles.includes(r))
            ? true
            : false;

    if (!auth.id) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    if (auth.id && !authHasRequiredRole) {
        return <AccessDenied />;
    }

    return <Outlet />;
}

export default PrivateRoutes;
