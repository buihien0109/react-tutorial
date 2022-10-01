import React, { useContext, useState } from "react";
import Context from "context/Context";
import { login } from "store/actions";

function ModalLogin() {
    const { auth, dispatchAuth } = useContext(Context);

    const { users } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Xử lý login
    const handleLogin = () => {
        let user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            alert("Email hoặc password không chính xác");
            return;
        }

        dispatchAuth(login(user))
    }

    return (
        <div
            className="modal fade"
            id="modal-login"
            tabIndex="-1"
            aria-labelledby="login-modal-label"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header justify-content-center">
                        <h5>Đăng nhập</h5>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="user-email"
                                placeholder="Nhập Email ..."
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="user-password"
                                placeholder="Nhập Password ..."
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                type="button"
                                className="btn btn-primary"
                                id="btn-login"
                                onClick={handleLogin}
                            >
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalLogin;
