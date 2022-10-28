import axios from "axios";
import React, { useEffect, useState } from "react";
import "./User.css";

function User() {
    const [users, setUsers] = useState([]);
    const [term, setTerm] = useState("");
    const [renderedUser, setRenderedUser] = useState(users);

    useEffect(() => {
        const fetchUsers = async () => {
            let res = await axios.get("https://api.github.com/users");
            setUsers(res.data);
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        setRenderedUser(users);
    }, [users]);

    const handleSearchWithEnter = (e) => {
        if (e.keyCode === 13) {
            handleSearch();
        }
    };

    const handleSearch = () => {
        if (!term) {
            setRenderedUser(users);
            return;
        }
        const newRenderedUser = users.filter((user) =>
            user.login.toLowerCase().includes(term.toLowerCase())
        );

        setRenderedUser(newRenderedUser);
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">
                Search Github Profile by Username
            </h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 border">
                        <input
                            type="text"
                            placeholder="Enter yourname ..."
                            className="form-control border-0 seach-form-input"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            onKeyDown={(e) => handleSearchWithEnter(e)}
                        />
                        <button
                            className="btn btn-info rounded-0 seach-form-button"
                            onClick={() => handleSearch()}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-10">
                    <table className="table list-user">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Link github</th>
                                <th>Link repo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderedUser.length > 0 &&
                                renderedUser.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>
                                            <img
                                                src={user.avatar_url}
                                                alt={user.login}
                                            />
                                        </td>
                                        <td>{user.login}</td>
                                        <td>{user.html_url}</td>
                                        <td>{user.repos_url}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="pagination-container d-flex justify-content-center"></div>
                </div>
            </div>
        </div>
    );
}

export default User;
