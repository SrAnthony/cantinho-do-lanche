import React, { useRef } from 'react'
import { Button } from 'antd'
import OrdersList from './OrdersList'
import OrderModal from 'Modals/Order'

import './styles.sass'

export default () => {
  const orderModalRef = useRef()

  return (
    <div className="content-wrapper orders">
      <div className="content-title">
        <h1>Pedidos</h1>
      </div>
      <div className="content-actions">
        <Button type="primary">
          Novo pedido
        </Button>
      </div>

      <section className="content-section">
        <OrdersList />
      </section>

      <OrderModal wrappedComponentRef={orderModalRef} />
    </div>
  )
}
