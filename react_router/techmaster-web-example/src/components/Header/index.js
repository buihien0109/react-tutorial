import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Context from '../../context/Context'

function Header() {
    const { cartItems } = useContext(Context)
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="https://techmaster.vn/resources/image/logo-techmaster/white/white_200x74.png"
                            alt="logo-techmaster" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/lo-trinh">LỘ TRÌNH</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/khoa-hoc">KHÓA HỌC</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/san-pham-hoc-vien">SẢN PHẨM HỌC VIÊN</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/bai-viet">BLOG</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/trung-tam">VỀ CHÚNG TÔI</NavLink>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center ms-5">
                            <div className="cart">
                                <Link to="/gio-hang" className="text-white position-relative">
                                    <span className="fs-5"><i className="fa-solid fa-cart-shopping"></i></span>
                                    <span className="cart-count bg-info px-1 rounded-2 position-absolute">{cartItems.length}</span>
                                </Link>
                            </div>
                            <div className="user ms-4">
                                <button type="button" className="bg-transparent border-0 text-white" data-bs-toggle="modal"
                                    data-bs-target="#modal-login">
                                    <span className="fs-5"><i className="fa-solid fa-user"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header