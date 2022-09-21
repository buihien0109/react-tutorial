import React from 'react'
import { useParams } from 'react-router-dom'

function OrderDetail() {
  const { orderId } = useParams();
  console.log(orderId)
  return (
    <h1>OrderDetail : {orderId}</h1>
  )
}

export default OrderDetail