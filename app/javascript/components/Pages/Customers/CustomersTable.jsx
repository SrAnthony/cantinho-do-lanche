import React from 'react'
import { Table, Divider, Icon, Popconfirm } from 'antd'
import moment from 'Utils/moment'

export default ({ data, openDrawer, destroyCustomer }) => {
  const columns = [{
    title: 'Nome',
    dataIndex: 'name',
    render: name => (
      <a href="#">{name}</a>
    )
  }, {
    title: 'Telefone',
    dataIndex: 'phone',
  }, {
    title: 'Aniversário',
    dataIndex: 'birthday',
    render: date => date ? moment(date).format('DD/MM/YYYY') : ''
  }, {
    title: 'Observações',
    dataIndex: 'observations',
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
          onConfirm={() => destroyCustomer(id)}
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
      rowKey={cl => cl.id}
    />
  )
}
