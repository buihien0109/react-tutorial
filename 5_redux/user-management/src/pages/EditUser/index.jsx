import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ModalUpdatePassword from "../../components/ModalUpdatePassword";
import { getUsers, updateUser } from "../../redux/slice/usersSlice";

function EditUser() {
    const params = useParams();
    const { userId } = params;

    const users = useSelector(getUsers);
    const currentUser = users.find((user) => user.id === +userId);

    const dispatch = useDispatch();

    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [phone, setPhone] = useState(currentUser.phone);

    const handleUpdateUser = (id) => {
        const updatedUser = {
            id: userId,
            name,
            email,
            phone,
        };

        dispatch(updateUser(updatedUser));
    };

    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center text-uppercase mb-3">Thông tin user</h2>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="bg-light p-4">
                        <div className="mb-3">
                            <label className="col-form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Email</label>
                            <input
                                type="text"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Password</label>
                            <div className="">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal-change-password"
                                >
                                    Đổi mật khẩu
                                </button>
                                <button
                                    className="btn btn-warning"
                                    id="btn-forgot-password"
                                >
                                    Quên mật khẩu
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Link
                            to={"/users"}
                            className="btn btn-secondary btn-back"
                        >
                            Quay lại
                        </Link>
                        <button
                            className="btn btn-success"
                            id="btn-save"
                            onClick={() => handleUpdateUser(currentUser.id)}
                        >
                            Cập nhật
                        </button>
                    </div>
                </div>
            </div>

            <ModalUpdatePassword />
        </div>
    );
}

export default EditUser;
