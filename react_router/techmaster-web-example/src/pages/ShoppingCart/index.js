import BillInformation from './components/BillInformation';
import ProductList from './components/ProductList';
import "./ShoppingCart.css";

function ShoppingCart() {
    return (
        <div className="shopping-cart-container py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-4">
                            <h3>Shopping Cart</h3>
                        </div>
                    </div>
                </div>

                <div className="row shopping-cart">
                    <ProductList />
                    <BillInformation />
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart