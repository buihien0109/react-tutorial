import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProvince from "../../app/hooks/useProvince";
import userService from "../../app/services/user.service";
import ModalUpdatePassword from "../../components/ModalUpdatePassword";

function UserEdit() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const { provinces } = useProvince();

    // Lấy thông tin user
    useEffect(() => {
        const fetchUser = async () => {
            try {
                let res = await userService.getUserById(userId);
                setUser(res);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUser();
    }, [userId]);

    // Cập nhật thông tin user
    const handleUpdateUser = async () => {
        try {
            const updatedUser = {
                name: user.name,
                phone: user.phone,
                address: user.address,
            };

            await userService.updateUser(userId, updatedUser);
            alert("Cập nhật thông tin thành công");
        } catch (error) {
            console.log(error);
        }
    };

    // Xử lý quên mật khẩu
    const handleForgotPassword = async () => {
        try {
            await userService.forgotPassword(userId);

            alert("Password đã được đổi thành công, vui lòng kiểm tra email!");
        } catch (error) {
            console.log(error);
        }
    };

    // Xử lý update ảnh của user
    const handleUpdloadAvatar = async (e) => {
        try {
            const file = e.target.files[0];

            const formData = new FormData();
            formData.append("file", file);

            let res = await userService.updoadAvatar(userId, formData);
            setUser({ ...user, avatar: res });
        } catch (error) {
            console.log(error);
        }
    };

    if (user === null) {
        return <>Loading ...</>;
    }

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
                                value={user.name}
                                onChange={(e) =>
                                    setUser({ ...user, name: e.target.value })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Email</label>
                            <input
                                type="text"
                                id="email"
                                className="form-control"
                                defaultValue={user.email}
                                disabled
                            />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                className="form-control"
                                value={user.phone}
                                onChange={(e) =>
                                    setUser({ ...user, phone: e.target.value })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Address</label>
                            <select
                                className="form-select"
                                id="address"
                                value={user.address}
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        address: e.target.value,
                                    })
                                }
                            >
                                <option hidden>-- Chọn tỉnh/thành phố</option>
                                {provinces.map((province) => (
                                    <option
                                        value={province.name}
                                        key={province.code}
                                    >
                                        {province.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Avatar</label>
                            <div className="avatar-preview mb-3 rounded">
                                <img
                                    src={
                                        `http://localhost:8080${user.avatar}` ??
                                        "https://via.placeholder.com/150"
                                    }
                                    alt="avatar"
                                    id="avatar-preview"
                                    className="rounded"
                                />
                            </div>

                            <label htmlFor="avatar" className="btn btn-warning">
                                Đổi avatar
                            </label>
                            <input
                                type="file"
                                id="avatar"
                                className="d-none"
                                onChange={(e) => handleUpdloadAvatar(e)}
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
                                    onClick={handleForgotPassword}
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
                            onClick={handleUpdateUser}
                        >
                            Cập nhật
                        </button>
                    </div>
                </div>
            </div>

            <ModalUpdatePassword userId={userId} />
        </div>
    );
}

export default UserEdit;
