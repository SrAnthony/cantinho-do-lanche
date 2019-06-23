import React from 'react'
import OrderItem from './OrderItem'

export default ({ orders, fetchOrders, showFinished }) => {

  const render_orders = showFinished
    ? orders.filter(order => order.status == 'finished')
    : orders.filter(order => order.status != 'finished')

  return (
    <ul className="orders-list">
      {render_orders.map(order => (
        <OrderItem key={order.id} order={order} fetchOrders={fetchOrders} />
      ))}
      {
        render_orders.length == 0 &&
        <li className="no-orders">
          Não há pedidos
        </li>
      }
    </ul>
  )
}
