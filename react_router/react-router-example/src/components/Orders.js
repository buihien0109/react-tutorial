import React from 'react'
import { Link } from 'react-router-dom'

function Orders() {
  const orders = [
    { id: 1, name: "Sản phẩm 1" },
    { id: 2, name: "Sản phẩm 2" },
    { id: 3, name: "Sản phẩm 3" },
    { id: 4, name: "Sản phẩm 4" }
  ]
  return (
    <>
      <h1>Orders</h1>

      <ul>
        {orders.map(order => <li key={order.id}>
          <Link to={`/orders/${order.id}`}>{order.name}</Link>
        </li>)}
      </ul>
    </>
  )
}

export default Orders
