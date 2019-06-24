import React, { useState, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Badge } from 'antd'
import axios from 'axios'
import x_egg from 'Images/x/x-egg.jpg'
import { formatCurrency } from 'Utils/formatters'

export default ({ form }) => {
  const [foods, setFoods] = useState([])

  const fetchFoods = () => {
    axios.get('/foods.json')
      .then(result => setFoods(result.data))
  }

  useEffect(fetchFoods, [])

  const selected_foods = form.getFieldValue('foods') || []

  const handleProductClick = id => {
    form.setFieldsValue({ foods: [...selected_foods, id] })
  }

  const handleRemoveClick = id => {
    form.setFieldsValue({ foods: selected_foods.filter(selected => selected != id) })
  }

  return (
    <div className="products-selector">
      <Scrollbars autoHide style={{ width: 776, height: 220 }}>
        <div className="list">
          {foods.map(food => {
            const is_selected = selected_foods.includes(food.id)

            return (
              <Badge
                key={food.id}
                count={selected_foods.reduce((acc, curr) => curr == food.id ? acc + 1 : acc, 0)}
                offset={[-15, 15]}
                overflowCount={999}
              >
                <div
                  className={`product-item ${is_selected && 'selected'}`}
                  onClick={() => handleProductClick(food.id)}
                >
                  <div className="image">
                    <img src={x_egg} />
                  </div>
                  <div className="title">
                    {food.name}
                  </div>
                  <div className="price">
                    {formatCurrency(food.price_cents)}
                  </div>
                </div>
                {
                  is_selected &&
                  <div className="remove" onClick={() => handleRemoveClick(food.id)}>
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
