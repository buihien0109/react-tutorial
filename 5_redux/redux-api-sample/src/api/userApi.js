import axiosClient from "./axiosClient";

const userApi = {
    getUsers() {
        const url = "/users"
        return axiosClient.get(url)
    },
    getUserById(id) {
        const url = `/users/${id}`
        return axiosClient.get(url)
    },
    createUser(newPost) {
        const url = `/users`
        return axiosClient.post(url, newPost)
    },
    updateUser(id, updatedPost) {
        const url = `/users/${id}`
        return axiosClient.put(url, updatedPost)
    },
    deleteUser(id) {
        const url = `/users/${id}`
        return axiosClient.delete(url)
    }
};

export default userApi;

