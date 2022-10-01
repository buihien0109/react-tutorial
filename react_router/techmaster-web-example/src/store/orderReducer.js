import { ADD_ORDER } from "./constants";

/* 
Cấu trúc của order

const orders = [
    {
        id : 1
        userId : 1,
        items : [
            {
                id : 1,
                title : "Sản phẩm 1",
                image : "",
                price : 200000
                count : 1
            }
        ],
        createdAt : 22-01-2022,
        paymentMethod : "Thanh toán trực tiếp"
    }
]
*/

// 1. Initial state
export const initialOrder = JSON.parse(localStorage.getItem("orders")) || [];

// 2. Reducer
const orderReducer = (state, action) => {
    console.log("orderReducer : ", action)

    let newState = [];
    switch (action.type) {
        case ADD_ORDER: {
            newState = [...state, action.payload];
            break;
        }
        default: {
            newState = [...state];
            break;
        }
    }

    localStorage.setItem("orders", JSON.stringify(newState));
    return newState;
};

export default orderReducer;