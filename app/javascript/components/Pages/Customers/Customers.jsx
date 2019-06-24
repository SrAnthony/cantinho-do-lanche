import React, { useState, useEffect, useRef } from 'react'
import { Button, message } from 'antd'
import axios from 'axios'
import CustomersTable from './CustomersTable'
import CustomerDrawer from 'Drawers/Customer'

export default () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCustomers = () => {
    axios.get('/customers.json')
      .then(result => setData(result.data))
      .finally(() => setLoading(false))
  }

  const destroyCustomer = id => {
    axios.delete(`/customers/${id}.json`)
      .then(() => {
        message.success('Cliente deletado com sucesso!')
        fetchCustomers()
      })
  }

  useEffect(fetchCustomers, [])

  const customerDrawerRef = useRef()

  return (
    <div className="content-wrapper customers">
      <div className="content-title">
        <h1>Clientes</h1>
      </div>
      <div className="content-actions">
        <Button type="primary" onClick={() => customerDrawerRef.current.open()}>
          Novo cliente
        </Button>
      </div>

      <section className="content-section">
        <CustomersTable
          data={data}
          openDrawer={id => customerDrawerRef.current.open(id)}
          destroyCustomer={destroyCustomer}
          loading={loading}
        />
      </section>

      <CustomerDrawer
        wrappedComponentRef={customerDrawerRef}
        onUpdate={fetchCustomers}
      />
    </div>
  )
}
