import React, { useState, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Badge } from 'antd'
import axios from 'axios'
import x_egg from 'Images/x/x-egg.jpg'

export default ({ form }) => {
  const [products, setProducts] = useState([])

  const fetchProducts = () => {
    axios.get('/products.json')
      .then(result => setProducts(result.data))
  }

  useEffect(fetchProducts, [])

  const selected_products = form.getFieldValue('products') || []

  const handleProductClick = id => {
    form.setFieldsValue({ products: [...selected_products, id] })
  }

  const handleRemoveClick = id => {
    form.setFieldsValue({ products: selected_products.filter(selected => selected != id) })
  }

  return (
    <div className="products-selector">
      <Scrollbars autoHide style={{ width: 776, height: 220 }}>
        <div className="list">
          {products.map(product => {
            const is_selected = selected_products.includes(product.id)

            return (
              <Badge
                key={product.id}
                count={selected_products.reduce((acc, curr) => curr == product.id ? acc + 1 : acc, 0)}
                offset={[-15, 15]}
                overflowCount={999}
              >
                <div
                  className={`product-item ${is_selected && 'selected'}`}
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="image">
                    <img src={x_egg} />
                  </div>
                  <div className="title">
                    {product.name}
                  </div>
                  <div className="price">
                    {product.price_cents}
                  </div>
                </div>
                {
                  is_selected &&
                  <div className="remove" onClick={() => handleRemoveClick(product.id)}>
                    Remover
                  </div>
                }
              </Badge>
            )
          })}
        </div>
      </Scrollbars>
    </div>
  )
}
