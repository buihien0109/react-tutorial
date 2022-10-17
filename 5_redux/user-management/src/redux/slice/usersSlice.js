import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//     { id: 1, name: "Bui Hien", email: "hien@gmail.com", phone: "0987654111", password: "111" },
//     { id: 2, name: "Minh Duy", email: "duy@gmail.com", phone: "0987654222", password: "111" },
//     { id: 3, name: "Thu Hang", email: "hang@gmail.com", phone: "0987654333", password: "111" }
// ]

const usersSlice = createSlice({
    name: "users",
    initialState: [
        { id: 1, name: "Bui Hien", email: "hien@gmail.com", phone: "0987654111", password: "111" },
        { id: 2, name: "Minh Duy", email: "duy@gmail.com", phone: "0987654222", password: "111" },
        { id: 3, name: "Thu Hang", email: "hang@gmail.com", phone: "0987654333", password: "111" }
    ],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        deleteUser: (state, action) => {
            const id = action.payload;
            return state.filter((user) => user.id !== id);
        },
        updateUser: (state, action) => {
            console.log(state);
            console.log(action);
            const updatedUser = action.payload;

            console.log("updatedUser : ", updatedUser);
            state = state.map((user) => {
                if (user.id === updatedUser.id) {
                    return { ...user, ...updatedUser };
                }
                return user;
            });
            return state;
        },
        updatePassword: (state, action) => {

        },
        forgotPassword: (state, action) => {

        }
    },
});

export const getUsers = (state => state.users)

export const {
    addUser,
    deleteUser,
    updateUser
} = usersSlice.actions;

export default usersSlice.reducer;
