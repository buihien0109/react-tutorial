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
    createUser(newUser) {
        const url = `/users`
        return axiosClient.post(url, newUser)
    },
    updateUser(id, updatedUser) {
        const url = `/users/${id}`
        return axiosClient.put(url, updatedUser)
    },
    deleteUser(id) {
        const url = `/users/${id}`
        return axiosClient.delete(url)
    }
};

export default userApi;