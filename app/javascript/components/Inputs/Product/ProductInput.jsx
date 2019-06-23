import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Select } from 'antd'

const { Option } = Select

export default props => {
  const [data, setData] = useState([])

  const fetchProducts = () => {
    axios.get('/products.json')
      .then(result => setData(result.data))
  }

  useEffect(fetchProducts, [])

  return (
    <Select
      showSearch
      placeholder="Selecione um produto"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      {...props}
    >
      {data.map(product => (
        <Option key={product.id} value={product.id}>
          {product.name}
        </Option>
      ))}
    </Select>
  )
}
