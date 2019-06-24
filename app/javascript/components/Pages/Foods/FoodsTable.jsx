import React from 'react'
import { Table, Divider, Icon, Popconfirm } from 'antd'
import { formatCurrency } from 'Utils/formatters'

export default ({ data, openDrawer, destroyFood }) => {
  const columns = [{
    title: 'Nome',
    dataIndex: 'name',
    render: name => (
      <a href="#">{name}</a>
    )
  }, {
    title: 'Preço',
    dataIndex: 'price_cents',
    render: price => formatCurrency(price),
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
          onConfirm={() => destroyFood(id)}
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
