import React from 'react'
import { Form, Row, Col, Input, Button } from 'antd'
import ProductsSelector from './ProductsSelector'

export default ({ form }) => {
  const { getFieldDecorator } = form

  return (
    <Form layout="vertical">
      {getFieldDecorator('products', {
        initialValue: [],
      })(<input type="hidden" />)}

      <Row gutter={16}>
        <Col span={8}>
          {getFieldDecorator('client_id', {
            rules: [{ required: true, message: 'Informe um cliente' }]
          })(
            <Input placeholder="Cliente" />
          )}
        </Col>
        <Col span={5}>
          {getFieldDecorator('table')(
            <Input placeholder="Mesa" />
          )}
        </Col>
        <Col span={11} style={{ textAlign: 'right' }}>
          <Button type="primary">
            Salvar
          </Button>
        </Col>
      </Row>

      <ProductsSelector form={form} />
    </Form>
  )
}
