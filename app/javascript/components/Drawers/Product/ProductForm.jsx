import React from 'react'
import { Form, Input, Row, Col } from 'antd'

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
              <Input placeholder="Informe o preço" />
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Estoque atual">
            {getFieldDecorator('stock')(
              <Input placeholder="Informe o estoque" />
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
