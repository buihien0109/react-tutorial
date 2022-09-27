import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <h2 className="my-3 text-white text-center">Application</h2>
            <div className="pt-3">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" end>Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/orders" className="nav-link">Orders</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/products" className="nav-link">Products</NavLink>
                        <ul className="mt-1">
                            <li className="nav-item">
                                <NavLink to="/products/laptop" className="nav-link">Laptop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products/desktop" className="nav-link">Desktop</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/customers" className="nav-link">Customers</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar