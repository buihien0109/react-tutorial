import React, { useState } from "react";

const numbers = [1, 2, 3, 4, 5];

function Counter() {
    // Xử lý phức tạp , tốn nhiều thời gian để tính toán
    // Qua mỗi lần render thì Xử lý này sẽ phải tính toán lại
    // Sử dụng callback trong useState để chạy duy nhất lần đầu

    // const rs = numbers.reduce((total, number) => total + number, 0);
    // console.log(rs);

    // Quản lý State
    // Mỗi lần state thay đổi -> component bị re-render lại
    // Initial state chỉ sử dụng cho lần đầu tiên
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(() => {
        let rs = numbers.reduce((total, number) => total + number, 0);
        console.log(rs);
        return rs;
    });

    // State phức tạp (array, object)
    const [name, setName] = useState("");
    const [user, setUser] = useState({
        id: 1,
        name: "Bùi Hiên",
        email: "hien@gmail.com",
    });

    const [idProduct, setIdProduct] = useState("");
    const [nameProduct, setNameProduct] = useState("");
    const [priceProduct, setPriceProduct] = useState("");
    const [products, setProducts] = useState([
        { id: 1, name: "Áo thun", price: 100000 },
        { id: 2, name: "Áo dài", price: 200000 },
        { id: 3, name: "Quần âu", price: 300000 },
    ]);

    // Các hàm xử lý
    const addCount = () => {
        setCount(count + 1);
    };

    const addCountMutil = () => {
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        setCount((count) => count + 1);
    };

    // Thay đổi tên user
    const changeName = () => {
        setUser({ ...user, name: name });
        setName("");
    };

    // Thay đổi tên sản phẩm
    const changeNameProduct = () => {
        let newProducts = products.map((product) => {
            if (product.id == +idProduct) {
                return { ...product, name: nameProduct };
            }
            return product;
        });
        setProducts(newProducts);
        setNameProduct("");
    };

    // Thay đổi giá sản phẩm
    const changePriceProduct = () => {
        let newProducts = products.map((product) => {
            if (product.id == +idProduct) {
                return { ...product, price: +priceProduct };
            }
            return product;
        });
        setProducts(newProducts);
        setIdProduct("");
    };

    return (
        <>
            <h1>Total : {total}</h1>
            <h1>Counter {count}</h1>
            <button onClick={addCount}>Add</button>
            <button onClick={addCountMutil}>Add Mutil</button>

            <hr />

            <h1>User : {JSON.stringify(user)}</h1>
            <input
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={changeName}>Add</button>

            <hr />
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        Id :{product.id} - Name : {product.name} - Price :{" "}
                        {product.price}
                    </li>
                ))}
            </ul>

            <input
                placeholder="Enter id"
                value={idProduct}
                onChange={(e) => setIdProduct(e.target.value)}
            />

            <br />

            <input
                placeholder="Enter name"
                value={nameProduct}
                onChange={(e) => setNameProduct(e.target.value)}
            />
            <button onClick={changeNameProduct}>Change name</button>

            <br />

            <input
                placeholder="Enter price"
                value={priceProduct}
                onChange={(e) => setPriceProduct(e.target.value)}
            />
            <button onClick={changePriceProduct}>Change price</button>
        </>
    );
}

export default Counter;
