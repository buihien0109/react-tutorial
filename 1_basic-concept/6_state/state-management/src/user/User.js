import React, { useState } from "react";

function User() {
    let data = [
        {
            id: 1,
            name: "Bùi Hiên",
            email: "hien@gmail.com",
            address: "Thái Bình",
        },
        {
            id: 2,
            name: "Thu Hằng",
            email: "hang@gmail.com",
            address: "Hải Dương",
        },
        {
            id: 3,
            name: "Minh Duy",
            email: "duy@gmail.com",
            address: "Hưng Yên",
        },
    ];

    const randomUser = (users) => {
        return users[Math.floor(Math.random() * users.length)];
    };

    const [users, setUsers] = useState(data);
    const [user, setUser] = useState(randomUser(users));

    // Lấy ngẫu nhiên user khi bấm nút
    const handleRandomUser = () => {
        let userRd = randomUser(users);
        setUser(userRd);
    };

    // Xóa user
    const handleDeleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));

        handleRandomUser();
    };

    return (
        <div>
            {users.length == 0 ? (
                <h1>Không có user nào trong danh sách</h1>
            ) : (
                <>
                    <h1 style={{ color: "red" }}>Name : {user.name}</h1>
                    <ul>
                        <li>Email : {user.email}</li>
                        <li>Address : {user.address}</li>
                    </ul>

                    <button onClick={() => handleRandomUser()}>
                        Random user
                    </button>
                    <button onClick={() => handleDeleteUser(user.id)}>
                        Delete user
                    </button>
                </>
            )}
        </div>
    );
}

export default User;
