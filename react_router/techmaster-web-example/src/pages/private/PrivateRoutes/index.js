import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Context from '../../../context/Context'

function PrivateRoutes() {
    const { auth } = useContext(Context);
    return auth.id ? <Outlet /> : <Navigate to="/error" />
}

export default PrivateRoutes