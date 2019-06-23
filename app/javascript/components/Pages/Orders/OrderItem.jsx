import React from 'react'

import x_egg from 'Images/x/x-egg.jpg'

export default ({ order }) => {

  return (
    <li>
      <div className="orders-list-item">
        <div className="image">
          <img src={x_egg} />
        </div>
        <h4 className="title">
          {order.product.name}
        </h4>
        <h4 className="client">
          {order.customer.name}
        </h4>
        <div className="progress">
          Em andamento
        </div>
      </div>
    </li>
  )
}
