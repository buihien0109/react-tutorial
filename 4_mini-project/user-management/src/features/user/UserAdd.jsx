import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useProvince from "../../app/hooks/useProvince";
import userService from "../../app/services/user.service";

function UserAdd() {
    const navigate = useNavigate();
    const { provinces } = useProvince();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const handleAddUser = async () => {
        try {
            let newUser = {
                name,
                email,
                phone,
                address,
                password,
            };

            await userService.createUser(newUser);

            alert("Create user successfully!");
            setTimeout(() => {
                navigate("/users");
            }, 1500);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center text-uppercase mb-3">Tạo user</h2>

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
                            setPhone
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Address</label>
                            <select
                                className="form-select"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
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
                            <label className="col-form-label">Password</label>
                            <input
                                type="text"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Link
                            className="btn btn-secondary btn-back"
                            to={"/users"}
                        >
                            Quay lại
                        </Link>
                        <button
                            className="btn btn-success"
                            id="btn-save"
                            onClick={handleAddUser}
                        >
                            Tạo User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserAdd;
