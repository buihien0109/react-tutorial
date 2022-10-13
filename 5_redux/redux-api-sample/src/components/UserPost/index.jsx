import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import postApi from "../../api/postApi";
import userApi from "../../api/userApi";

function UserPost() {
    const params = useParams();
    const [user, setUser] = useState();
    const [posts, setPosts] = useState([]);

    console.log(params);

    const { userId } = params;
    console.log(userId);

    useEffect(() => {
        const fetchUser = async (id) => {
            let res = await userApi.getUserById(id);
            console.log(res);

            setUser(res);
        };

        fetchUser(userId);
    }, []);

    useEffect(() => {
        const fetchPostsOfUser = async (userId) => {
            let res = await postApi.getPostsOfUser(userId);
            console.log(res);

            setPosts(res);
        };

        fetchPostsOfUser(userId);
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">List post of {user?.name}</h1>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <th>{post.id}</th>
                            <td>{post.title}</td>
                            <td>
                                <Link to={`/posts/${post.id}`}>Detail</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserPost;
