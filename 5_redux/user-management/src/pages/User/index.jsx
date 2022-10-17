import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../../redux/slice/usersSlice";

function User() {
    const users = useSelector(getUsers);
    const dispatch = useDispatch();

    const handleDeleteUser = (id) => {
        const isConfirm = window.confirm("Bạn có muốn xóa không?");
        if (!isConfirm) return;

        dispatch(deleteUser(id));
    };

    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center text-uppercase">Danh sách user</h2>

            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="bg-light p-4">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <Link
                                                to={`/users/${user.id}`}
                                                className="btn btn-success me-2"
                                            >
                                                Xem chi tiết
                                            </Link>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    handleDeleteUser(user.id)
                                                }
                                            >
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
