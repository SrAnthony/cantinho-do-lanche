import React from 'react'
import OrderItem from './OrderItem'

export default ({ orders, fetchOrders }) => {

  return (
    <ul className="orders-list">
      {orders.map(order => (
        <OrderItem key={order.id} order={order} fetchOrders={fetchOrders} />
      ))}
      {
        orders.length == 0 &&
        <li className="no-orders">
          Não há pedidos
        </li>
      }
    </ul>
  )
}
