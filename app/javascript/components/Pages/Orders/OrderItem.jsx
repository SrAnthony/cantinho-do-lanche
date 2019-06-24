import React from 'react'
import axios from 'axios'
import { Menu, Dropdown, message } from 'antd'

import x_egg from 'Images/x/x-egg.jpg'

export default ({ order, fetchOrders }) => {
  const updateStatus = status => {
    const data = { status }
    axios.patch(`/orders/${order.id}.json`, data)
      .then(fetchOrders)
      .catch(() => message.error('Não foi possível atualizar o status desse pedido'))
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => updateStatus('waiting')}>
          Aguardando
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => updateStatus('in_progress')}>
          Em andamento
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => updateStatus('ready')}>
          Pronto
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => updateStatus('finished')}>
          Finalizado
        </a>
      </Menu.Item>
    </Menu>
  )

  const status_name = status => {
    switch (status) {
      case 'waiting':
        return 'Aguardando'
      case 'in_progress':
        return 'Em andamento'
      case 'ready':
        return 'Pronto'
      case 'finished':
        return 'Finalizado'
    }
  }

  return (
    <li>
      <div className="orders-list-item">
        <div className="image">
          <img src={x_egg} />
        </div>
        <h4 className="title">
          {order.food.name}
        </h4>
        <h4 className="client">
          {order.customer.name}
        </h4>
        <Dropdown overlay={menu} trigger={['click']}>
          <div className={`progress ${order.status}`}>
            {status_name(order.status)}
          </div>
        </Dropdown>
        <div className="table-number">
          {order.table && `Mesa ${order.table}`}
        </div>
      </div>
    </li>
  )
}
