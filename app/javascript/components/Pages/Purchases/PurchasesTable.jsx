import React from 'react'
import { Table, Divider, Icon, Popconfirm } from 'antd'
import { formatCurrency } from 'Utils/formatters'

export default ({ data, openDrawer, destroyPurchase }) => {
  const columns = [{
    title: 'Produto',
    dataIndex: 'product',
    render: product => (
      <a href="#">{product.name}</a>
    )
  }, {
    title: 'Preço unit',
    dataIndex: 'price_cents',
    render: price => formatCurrency(price),
  }, {
    title: 'Quantidade',
    dataIndex: 'quantity',
  }, {
    title: 'Valor total',
    key: 'total_value',
    render: (_, purchase) => formatCurrency(purchase.price_cents * purchase.quantity)
  }, {
    title: 'Observação',
    dataIndex: 'observation',
  }, {
    title: 'Ações',
    dataIndex: 'id',
    fixed: 'right',
    width: 100,
    render: id => (
      <div>
        <a onClick={() => openDrawer(id)}>
          <Icon type="edit" />
        </a>
        <Divider type="vertical" />
        <Popconfirm
          title="Tem certeza?"
          onConfirm={() => destroyPurchase(id)}
          okText="Sim"
          cancelText="Não"
          placement="left"
        >
          <a><Icon type="delete" /></a>
        </Popconfirm>
      </div>
    )
  }]

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={pr => pr.id}
    />
  )
}
