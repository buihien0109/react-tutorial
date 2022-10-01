import React, { useContext } from 'react'
import ProductItem from '../ProductItem'
import Context from "context/Context";

function ProductList() {
    const { cartItems } = useContext(Context);

    return (
        <div className="col-md-8">
            <div className="product-list">
                {cartItems.length === 0 && <p>Không có sản phẩm nào trong giỏ hàng</p>}
                {cartItems.length > 0 && cartItems.map(item => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductList