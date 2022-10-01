import React, { useState, useContext } from 'react'
import Context from 'context/Context';
import { syncAuth, updateProfile } from "store/actions";

function SecurityAccount() {
    const { auth, dispatchUser, dispatchAuth } = useContext(Context);

    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleUpdatePassword = () => {
        if (password !== auth.password) {
            alert("Mật khẩu cũ không chính xác");
            return
        }
        if (password === newPassword) {
            alert("Mật khẩu cũ và mới không được trùng nhau");
            return
        }
        if (confirmPassword !== newPassword) {
            alert("Mật khẩu mới và xác nhận chưa trùng nhau");
            return
        }

        const authUpdate = {
            id: auth.id,
            password: newPassword
        };

        dispatchUser(updateProfile(authUpdate));
        dispatchAuth(syncAuth(authUpdate));
        alert("Cập nhật thông tin thành công");

        setPassword("")
        setNewPassword("")
        setConfirmPassword("")
    }

    return (
        <section className="py-5">
            <div className="container">
                <h1 className="fs-4 mb-5">Bảo mật tài khoản</h1>

                <div className="row">
                    <div className="col-md-6">
                        <div className="bg-light p-4">
                            <div className="mb-3">
                                <label className="col-form-label">Mật khẩu cũ</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Mật khẩu mới</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Xác nhận lại mật khẩu mới</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button
                                className="btn btn-primary"
                                id="btn-save"
                                onClick={handleUpdatePassword}
                            >
                                Cập nhật mật khẩu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecurityAccount