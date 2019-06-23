import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Select } from 'antd'

const { Option } = Select

export default props => {
  const [data, setData] = useState([])

  const fetchCustomers = () => {
    axios.get('/customers.json')
      .then(result => setData(result.data))
  }

  useEffect(fetchCustomers, [])

  return (
    <Select
      showSearch
      placeholder="Selecione um cliente"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      {...props}
    >
      {data.map(client => (
        <Option key={client.id} value={client.id}>
          {client.name}
        </Option>
      ))}
    </Select>
  )
}
