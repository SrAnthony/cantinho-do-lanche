import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Select } from 'antd'

const { Option } = Select

export default props => {
  const [data, setData] = useState([])

  const fetchFoods = () => {
    axios.get('/foods.json')
      .then(result => setData(result.data))
  }

  useEffect(fetchFoods, [])

  return (
    <Select
      showSearch
      placeholder="Selecione um lanche"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      {...props}
    >
      {data.map(food => (
        <Option key={food.id} value={food.id}>
          {food.name}
        </Option>
      ))}
    </Select>
  )
}
