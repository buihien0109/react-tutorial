import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import postApi from "../../api/postApi";
import userApi from "../../api/userApi";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [users, getUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            let res = await userApi.getUsers();
            console.log(res);
            getUsers(res);
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            let res = await postApi.getPosts();
            console.log(res);
            setPosts(res);
        };

        fetchPosts();
    }, []);

    const getName = (userId) => {
        const user = users.find((user) => user.id === userId);
        return user.name;
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">List post</h1>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Author</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <th>{post.id}</th>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <Link to={`/users/${post.userId}/posts`}>
                                    {getName(post.userId)}
                                </Link>
                            </td>
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

export default PostList;
