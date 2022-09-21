import React, { useContext } from "react";
import Context from "../../context/Context";
import { addCount, substractCount, deleteProduct } from "../../store/actions";
import { formatMoney } from "../../utils/utils";

function ProductItem(props) {
    const { products, dispatch } = useContext(Context);
    const { id, name, image, price, count, size } = props.product;

    // Xử lý tăng số lượng sản phẩm
    const handleAddCount = (id) => {
        dispatch(addCount(id));
    };

    // Xử lý giảm số lượng sản phẩm
    const handleSubtractCount = (id) => {
        let product = products.find(p => p.id === id);
        if (product.count <= 1) return;
        dispatch(substractCount(id));
    };

    // Xử lý xóa sản phẩm
    const handleDeleteProduct = (id) => {
        let isConfirm = window.confirm("Bạn có muốn xóa không?");
        if (isConfirm) {
            dispatch(deleteProduct(id));
        }
    };

    return (
        <div className="product-item d-flex border mb-4">
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="text-dark fs-5 fw-normal">
                            {name} - {size}
                        </h2>
                        <h2 className="text-danger fs-5 fw-normal">{formatMoney(price)}</h2>
                    </div>
                    <p className="text-black-50">
                        <span className="border d-inline-block me-3">
                            <span
                                className="py-2 px-3 d-inline-block fw-bold bg-light"
                                onClick={() => handleSubtractCount(id)}
                            >
                                -
                            </span>
                            <span className="py-2 px-3 d-inline-block fw-bold">
                                {count}
                            </span>
                            <span
                                className="py-2 px-3 d-inline-block fw-bold bg-light"
                                onClick={() => handleAddCount(id)}
                            >
                                +
                            </span>
                        </span>
                    </p>
                </div>
                <div>
                    <button
                        className="text-primary border-0 bg-transparent fw-light"
                        onClick={() => handleDeleteProduct(id)}
                    >
                        <span>
                            <i className="fa-solid fa-trash-can"></i>
                        </span>
                        Xóa
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
