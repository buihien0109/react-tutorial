import instance from "./base.service";

const userService = {
    getUsers: () => {
        const url = "/users";
        return instance.get(url);
    },
    searchUser: (term) => {
        const params = {
            name: term,
        };
        const url = "/users/search";
        return instance.get(url, { params });
    },
    getUserById: (id) => {
        const url = `/users/${id}`;
        return instance.get(url);
    },
    createUser: (data) => {
        const url = "/users";
        return instance.post(url, data);
    },
    updateUser: (id, data) => {
        const url = `/users/${id}`;
        return instance.put(url, data);
    },
    deleteUser: (id) => {
        const url = `/users/${id}`;
        return instance.delete(url);
    },
    updatePassword: (id, data) => {
        const url = `/users/${id}/update-password`;
        return instance.put(url, data);
    },
    forgotPassword: (id) => {
        const url = `/users/${id}/forgot-password`;
        return instance.post(url);
    },
    updoadAvatar: (id, data) => {
        const headers = {
            "Content-Type": "multipart/form-data",
        };

        const url = `/users/${id}/update-avatar-v2`;
        return instance.post(url, data, { headers });
    },
};

export default userService;
