import React, { useRef, useState, useEffect } from 'react'
import { Button } from 'antd'
import axios from 'axios'
import OrdersList from './OrdersList'
import OrderModal from 'Modals/Order'

import './styles.sass'

export default () => {
  const orderModalRef = useRef()
  const [orders, setOrders] = useState([])

  const fetchOrders = () => {
    axios.get('/orders.json')
      .then(result => setOrders(result.data.reverse()))
  }

  useEffect(fetchOrders, [])

  return (
    <div className="content-wrapper orders">
      <div className="content-title">
        <h1>Pedidos</h1>
      </div>
      <div className="content-actions">
        <Button type="primary" onClick={() => orderModalRef.current.open()}>
          Novo pedido
        </Button>
      </div>

      <section className="content-section">
        <OrdersList orders={orders} fetchOrders={fetchOrders} />
      </section>

      <OrderModal
        wrappedComponentRef={orderModalRef}
        onUpdate={fetchOrders}
      />
    </div>
  )
}
