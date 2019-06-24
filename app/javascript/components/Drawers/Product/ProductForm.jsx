import React from 'react'
import { Form, Input, InputNumber, Row, Col } from 'antd'
import { formatCurrency, numberParser } from 'Utils/formatters'

export default ({ form }) => {
  const { getFieldDecorator } = form

  return (
    <Form layout="vertical">
      {getFieldDecorator('id')(<Input type="hidden" />)}

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Nome">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Nome é obrigatório' }],
            })(
              <Input placeholder="Informe o nome" />
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Preço">
            {getFieldDecorator('price_cents', {
              rules: [{ required: true, message: 'Preço é obrigatório' }]
            })(
              <InputNumber
                formatter={formatCurrency}
                parser={numberParser}
                style={{ width: '100%' }}
              />
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Estoque atual">
            {getFieldDecorator('stock')(
              <InputNumber
                placeholder="Informe o estoque"
                style={{ width: '100%' }}
              />
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Categoria">
            {getFieldDecorator('category')(
              <Input placeholder="Informe a categoria" />
            )}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
