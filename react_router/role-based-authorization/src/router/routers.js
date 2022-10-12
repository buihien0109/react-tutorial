const routers = [
    {
        path: "/profile",
        roles: ["USER", "ADMIN"]
    },
    {
        path: "/order-history",
        roles: ["USER", "ADMIN"]
    },
    {
        path: "/admin/blogs",
        roles: ["ADMIN"]
    },
    {
        path: "/admin/users",
        roles: ["ADMIN"]
    }
]

export default routers