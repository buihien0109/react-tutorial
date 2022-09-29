import React, { useContext, useState } from "react";
import Context from "../../../context/Context";
import { syncAuth, updateProfile } from "../../../store/actions";

function Profile() {
    const { auth, dispatchUser, dispatchAuth } = useContext(Context);
    const [name, setName] = useState(auth.name);
    const [phone, setPhone] = useState(auth.phone);

    // Xử lý cập nhật thông tin của user
    const handleUpdateProfile = () => {
        const authUpdate = {
            id: auth.id,
            name,
            phone
        };

        dispatchUser(updateProfile(authUpdate));
        dispatchAuth(syncAuth(authUpdate));
        alert("Cập nhật thông tin thành công");
    };

    return (
        <section className="py-5">
            <div className="container">
                <h1 className="fs-4 mb-5">Hồ sơ cá nhân</h1>

                <div className="row">
                    <div className="col-md-6">
                        <div className="bg-light p-4">
                            <div className="mb-3">
                                <label className="form-label">Avatar</label>
                                <div className="avatar-preview mb-3 rounded">
                                    <img
                                        src={auth.avatar}
                                        alt="avatar"
                                        id="avatar-preview"
                                        className="rounded"
                                    />
                                </div>
                            </div>
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
                                    disabled
                                    defaultValue={auth.email}
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
                        </div>
                        <div className="text-center mt-3">
                            <button
                                className="btn btn-primary"
                                id="btn-save"
                                onClick={handleUpdateProfile}
                            >
                                Cập nhật thông tin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
