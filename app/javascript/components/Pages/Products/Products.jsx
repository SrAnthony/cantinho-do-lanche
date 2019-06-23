import React, { useState, useEffect, useRef } from 'react'
import { Button, message } from 'antd'
import axios from 'axios'
import ProductsTable from './ProductsTable'
import ProductDrawer from 'Drawers/Product'

export default () => {
  const [data, setData] = useState([])

  const fetchProducts = () => {
    axios.get('/products.json')
      .then(result => {
        setData(result.data)
      })
  }

  const destroyProduct = id => {
    axios.delete(`/products/${id}.json`)
      .then(() => {
        message.success('Produto deletado com sucesso!')
        fetchProducts()
      })
  }

  useEffect(fetchProducts, [])

  const productDrawerRef = useRef()

  return (
    <div className="content-wrapper customers">
      <div className="content-title">
        <h1>Produtos</h1>
      </div>
      <div className="content-actions">
        <Button type="primary" onClick={() => productDrawerRef.current.open()}>
          Novo produto
        </Button>
      </div>

      <section className="content-section">
        <ProductsTable
          data={data}
          openDrawer={id => productDrawerRef.current.open(id)}
          destroyProduct={destroyProduct}
        />
      </section>

      <ProductDrawer
        wrappedComponentRef={productDrawerRef}
        onUpdate={fetchProducts}
      />
    </div>
  )
}
