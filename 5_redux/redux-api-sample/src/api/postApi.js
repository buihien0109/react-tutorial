import axiosClient from "./axiosClient";

const postApi = {
    getPosts() {
        const url = "/posts"
        return axiosClient.get(url)
    },
    getPostById(id) {
        const url = `/posts/${id}`
        return axiosClient.get(url)
    },
    getPostsOfUser(userId) {
        const url = `users/${userId}/posts`
        return axiosClient.get(url)
    }
};

export default postApi;
