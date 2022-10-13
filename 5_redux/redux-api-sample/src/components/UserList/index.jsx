import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userApi from "../../api/userApi";

function UserList() {
    const [users, getUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            let res = await userApi.getUsers();
            console.log(res);
            getUsers(res);
        };

        fetchUsers();
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">List user</h1>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <th>{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <Link to={`/users/${user.id}/posts`}>
                                    List post
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
