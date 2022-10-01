import React, { useContext } from 'react'
import Context from 'context/Context'
import { formatMoney } from 'utils/utils'

function OrderHistory() {
    const { auth, orders } = useContext(Context)

    const authOrders = orders.filter(order => order.userId === auth.id)

    return (
        <section className="py-5">
            <div className="container">
                <h1 className="fs-4 mb-5">Lịch sử đơn hàng</h1>

                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Danh sách item</th>
                            <th>Ngày đăng ký</th>
                            <th>Hình thức thanh toán</th>
                            <th>Tổng tiền đơn hàng (đã bao gồm VAT - 10%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authOrders.map((order, index) => (
                            <tr key={order.id}>
                                <td>{index + 1}</td>
                                <td>
                                    {order.items.map(item => (
                                        <ul>
                                            <li>{item.title}  ({formatMoney(item.price)} - {item.count})</li>
                                        </ul>
                                    ))}
                                </td>
                                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                <td>{order.paymentMethod === "transfer" ? "Chuyển khoản" : "Đóng tiền trực tiếp"}</td>
                                <td>{formatMoney(order.total)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default OrderHistory