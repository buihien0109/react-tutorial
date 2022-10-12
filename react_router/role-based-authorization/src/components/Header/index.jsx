import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import { logout } from "../../store/actions";
import "./Header.css";

function Header(props) {
    const navigate = useNavigate();
    const { auth, dispatchAuth } = useContext(Context);

    const handleLogout = () => {
        dispatchAuth(logout());
        navigate("/");
    };
    return (
        <>
            <div className="header" style={{ backgroundColor: props.bg }}>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            APPLICATION
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link text-white"
                                        to="/"
                                        end
                                    >
                                        Trang chủ
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link text-white"
                                        to="/shop"
                                    >
                                        Cửa hàng
                                    </NavLink>
                                </li>
                            </ul>

                            <div className="d-flex align-items-center ms-5">
                                <div className="user ms-4">
                                    {!auth.id && (
                                        <Link
                                            to={"/login"}
                                            className="bg-transparent border-0 text-white"
                                        >
                                            <span className="fs-5">
                                                <i className="fa-solid fa-user"></i>
                                            </span>
                                        </Link>
                                    )}
                                    {auth.id && (
                                        <div className="dropdown auth-dropdown">
                                            <img
                                                type="button"
                                                id="auth-avatar"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                src={auth.avatar}
                                                alt={auth.name}
                                            />
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuButton1"
                                            >
                                                <li>
                                                    <Link
                                                        className="dropdown-item"
                                                        to="/profile"
                                                    >
                                                        Trang cá nhân
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item"
                                                        to="/order-history"
                                                    >
                                                        Lịch sử đặt hàng
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item"
                                                        to="/admin/blogs"
                                                    >
                                                        Quản lý bài viết
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item"
                                                        to="/admin/users"
                                                    >
                                                        Quản lý user
                                                    </Link>
                                                </li>
                                                <li>
                                                    <button
                                                        className="dropdown-item"
                                                        onClick={handleLogout}
                                                    >
                                                        Đăng xuất
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
