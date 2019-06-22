import React from 'react'

import x_egg from 'Images/x/x-egg.jpg'

export default () => {

  return (
    <li>
      <div className="orders-list-item">
        <div className="image">
          <img src={x_egg} />
        </div>
        <h4 className="title">
          X-Egg
        </h4>
        <h4 className="client">
          Luana Silva
        </h4>
        <div className="progress">
          Em andamento
        </div>
      </div>
    </li>
  )
}
