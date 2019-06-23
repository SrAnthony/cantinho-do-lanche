import React, { useState, useEffect, useRef } from 'react'
import { Button, message } from 'antd'
import axios from 'axios'
import PurchasesTable from './PurchasesTable'
import PurchaseDrawer from 'Drawers/Purchase'

export default () => {
  const [data, setData] = useState([])

  const fetchPurchases = () => {
    axios.get('/purchases.json')
      .then(result => {
        setData(result.data)
      })
  }

  const destroyPurchase = id => {
    axios.delete(`/purchases/${id}.json`)
      .then(() => {
        message.success('Compra deletada com sucesso!')
        fetchPurchases()
      })
  }

  useEffect(fetchPurchases, [])

  const purchaseDrawerRef = useRef()

  return (
    <div className="content-wrapper customers">
      <div className="content-title">
        <h1>Compras</h1>
      </div>
      <div className="content-actions">
        <Button type="primary" onClick={() => purchaseDrawerRef.current.open()}>
          Nova compra
        </Button>
      </div>

      <section className="content-section">
        <PurchasesTable
          data={data}
          openDrawer={id => purchaseDrawerRef.current.open(id)}
          destroyPurchase={destroyPurchase}
        />
      </section>

      <PurchaseDrawer
        wrappedComponentRef={purchaseDrawerRef}
        onUpdate={fetchPurchases}
      />
    </div>
  )
}
