import React, { useState, useMemo } from "react";

function Product() {
    const [name, setName] = useState("");

    const [products, setProducts] = useState([
        { id: 1, name: "Áo thun", price: 100000 },
        { id: 2, name: "Áo dài", price: 200000 },
        { id: 3, name: "Quần âu", price: 300000 },
    ]);

    // Thêm product mới
    const addProduct = () => {
        setProducts([
            ...products,
            {
                id: products.length + 1,
                name: name,
                price: 300000,
            },
        ]);
    };

    // useMemo : Tránh tính toán function nếu không có sự thay đổi về deps
    // useMemo : const value = useMemo(callbackFunction(), [deps])

    // Total sẽ được tính toán lại nếu có sự thay đổi về product
    const total = useMemo(() => {
        let rs = products.reduce((total, product) => (total += product.price), 0);
        console.log(rs);

        return rs;
    }, [products]);

    return (
        <div>
            <h2>Add product</h2>
            <input
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={addProduct}>Add</button>

            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        Id :{product.id} - Name : {product.name} - Price : {product.price}
                    </li>
                ))}
            </ul>

            <h2>Total : {total}</h2>
        </div>
    );
}

export default Product;
