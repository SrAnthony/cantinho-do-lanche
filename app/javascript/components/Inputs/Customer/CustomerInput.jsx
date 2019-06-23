import React from 'react'
import { Select } from 'antd'

const { Option } = Select

export default props => {
  const clients = [{
    id: 1, name: 'Anthony Nadaletti',
  }, {
    id: 2, name: 'Barbara Pegoraro',
  }, {
    id: 3, name: 'Augusto Araujo',
  }]

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
      {clients.map(client => (
        <Option key={client.id} value={client.id}>
          {client.name}
        </Option>
      ))}
    </Select>
  )
}
