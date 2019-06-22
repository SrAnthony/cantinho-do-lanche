import React from 'react'
import { Button } from 'antd'
import OrdersList from './OrdersList'

import './styles.sass'

export default () => {

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
    </div>
  )
}
