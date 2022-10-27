import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userService from "../../app/services/user.service";

function UserList() {
    const [users, setUsers] = useState([]);
    const [term, setTerm] = useState("");

    // Lấy danh sách user
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let res = await userService.getUsers();
                setUsers(res);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();
    }, []);

    // Tìm kiếm user
    const handleSearch = async (e) => {
        if (e.keyCode === 13) {
            try {
                let res = await userService.searchUser(term);
                setUsers(res);
            } catch (error) {
                console.log(error);
            }
        }
    };

    // Xóa user
    const handleDeleteUser = async (id) => {
        try {
            await userService.deleteUser(id);

            let newUsers = users.filter((user) => user.id !== id);
            setUsers(newUsers);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center text-uppercase">Danh sách user</h2>

            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="d-flex justify-content-end align-items-center mt-5 mb-4">
                        <input
                            type="text"
                            id="search"
                            className="form-control w-50"
                            placeholder="Tìm kiếm user"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            onKeyDown={(e) => handleSearch(e)}
                        />
                    </div>

                    <div className="bg-light p-4">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.length > 0 &&
                                    users.map((user, index) => (
                                        <tr key={user.id}>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.address}</td>
                                            <td>
                                                <Link
                                                    to={`/users/${user.id}`}
                                                    className="btn btn-success"
                                                >
                                                    Xem chi tiết
                                                </Link>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                        handleDeleteUser(
                                                            user.id
                                                        )
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

export default UserList;
