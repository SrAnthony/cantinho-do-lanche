import React from 'react'
import OrderItem from './OrderItem'

export default ({ orders }) => {

  return (
    <ul className="orders-list">
      {orders.map(order => (
        <OrderItem key={order.id} order={order} />
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
