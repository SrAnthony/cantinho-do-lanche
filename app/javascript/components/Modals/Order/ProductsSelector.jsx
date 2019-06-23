import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Badge } from 'antd'
import x_egg from 'Images/x/x-egg.jpg'

export default ({ form }) => {
  const products = form.getFieldValue('products') || []

  const handleProductClick = product => {
    form.setFieldsValue({ products: [...products, product] })
  }

  const handleRemoveClick = product => {
    form.setFieldsValue({ products: products.filter(pr => pr != product) })
  }

  return (
    <div className="products-selector">
      <Scrollbars autoHide style={{ width: 776, height: 220 }}>
        <div className="list">
          {[0,1,2,3,4,5,6,7,8,10].map(n => (
            <Badge
              key={n}
              count={products.reduce((acc, curr) => curr == n ? acc + 1 : acc, 0)}
              offset={[-15, 15]}
              overflowCount={999}
            >
              <div
                className={`product-item ${products.includes(n) && 'selected'}`}
                onClick={() => handleProductClick(n)}
              >
                <div className="image">
                  <img src={x_egg} />
                </div>
                <div className="title">
                  X-Egg
                </div>
                <div className="price">
                  R$ 15,00
                </div>
              </div>
              {
                products.includes(n) &&
                <div className="remove" onClick={() => handleRemoveClick(n)}>
                  Remover
                </div>
              }
            </Badge>
          ))}
        </div>
      </Scrollbars>
    </div>
  )
}
