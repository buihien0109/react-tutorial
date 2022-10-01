import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatMoney, randomNumber } from "utils/utils";
import Context from "context/Context";
import { addOrder, clearCart } from "store/actions";

function Checkout() {
    const navigate = useNavigate();
    const { auth, cartItems, dispatchOrder, dispatchCart } =
        useContext(Context);

    const [name, setName] = useState(auth.name || "");
    const [email, setEmail] = useState(auth.email || "");
    const [phone, setPhone] = useState(auth.phone || "");
    const [payment, setPayment] = useState("transfer");

    // Tính tổng tiền đơn hàng
    const subTotal = cartItems.reduce(
        (total, product) => total + product.count * product.price,
        0
    );
    const vat = subTotal * 0.1;
    const total = subTotal + vat;

    // Xử lý đăng ký đơn hàng
    const handleRegisterOrder = () => {
        // Nếu user đã đăng nhập thì lưu lại order liên quan đến user đó
        if (auth.id) {
            let newOrder = {
                id: randomNumber(100, 999),
                userId: auth.id,
                items: cartItems,
                createdAt: new Date(),
                paymentMethod: payment,
                total
            };
            dispatchOrder(addOrder(newOrder));
        }

        // Xóa danh sách item trong cart
        dispatchCart(clearCart());

        alert("Đăng ký đơn hàng thành công");
        navigate("/khoa-hoc");
    };

    return (
        <div className="shopping-cart-container my-5">
            <div className="container">
                <div className="mb-4">
                    <nav
                        style={{ "--bs-breadcrumb-divider": ">" }}
                        aria-label="breadcrumb"
                    >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/gio-hang">Giỏ hàng</Link>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Thanh toán
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="p-4 shadow-sm">
                            <h2 className="fs-5 fw-normal mb-3">
                                1. Thông tin tài khoản
                            </h2>
                            <div className="account-info d-flex mb-4">
                                <input
                                    type="text"
                                    placeholder="Nhập tên"
                                    className="form-control flex-grow-1"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Nhập email"
                                    className="form-control flex-grow-1 mx-2"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Nhập số điện thoại"
                                    className="form-control flex-grow-1"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <h2 className="fs-5 fw-normal mb-3 mt-5">
                                2. Phương thức thanh toán
                            </h2>
                            <div className="payment methods">
                                <div className="topic-item input-group d-flex align-items-center mb-1">
                                    <input
                                        type="radio"
                                        value="transfer"
                                        id="transfer"
                                        checked={payment === "transfer"}
                                        onChange={(e) => setPayment("transfer")}
                                    />
                                    <label htmlFor="transfer" className="ms-2">
                                        Chuyển khoản
                                    </label>
                                </div>
                                <div className="topic-item input-group d-flex align-items-center mb-1">
                                    <input
                                        type="radio"
                                        value="direct"
                                        id="direct"
                                        checked={payment === "direct"}
                                        onChange={(e) => setPayment("direct")}
                                    />
                                    <label htmlFor="direct" className="ms-2">
                                        Thanh toán trực tiếp
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 shadow-sm">
                            <div className="order-detail">
                                <h2 className="fs-5 fw-normal mb-4">
                                    Đơn hàng
                                </h2>

                                <div className="order-items">
                                    {cartItems.map((c) => (
                                        <div
                                            key={c.id}
                                            className="order-item d-flex justify-content-between align-items-center"
                                        >
                                            <p className="text-black-50">
                                                {c.title}
                                            </p>
                                            <p className="fw-bold">
                                                {formatMoney(c.price)} x{" "}
                                                {c.count}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4">
                                    <p className="text-black-50 fw-bold">
                                        Thành tiền
                                    </p>
                                    <p className="fw-bold">
                                        {formatMoney(subTotal)}
                                    </p>
                                </div>

                                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4">
                                    <p className="text-black-50 fw-bold">VAT</p>
                                    <p className="fw-bold">
                                        {formatMoney(vat)}
                                    </p>
                                </div>

                                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4 pb-4">
                                    <p className="text-black-50 fw-bold">
                                        Tổng cộng
                                    </p>
                                    <p className="fw-bold">
                                        {formatMoney(total)}
                                    </p>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button
                                        className="btn btn-primary"
                                        id="btn-submit"
                                        onClick={handleRegisterOrder}
                                    >
                                        Gửi đăng ký
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
