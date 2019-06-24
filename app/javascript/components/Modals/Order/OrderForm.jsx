import React from 'react'
import { Form, Row, Col, Input, Button } from 'antd'
import ProductsSelector from './ProductsSelector'
import CustomerInput from 'Inputs/Customer'

export default ({ form, submit, loading }) => {
  const { getFieldDecorator } = form

  return (
    <Form layout="vertical">
      {getFieldDecorator('foods', {
        initialValue: [],
      })(<input type="hidden" />)}

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item>
            {getFieldDecorator('customer_id', {
              rules: [{ required: true, message: 'Informe um cliente' }]
            })(
              <CustomerInput />
            )}
          </Form.Item>
        </Col>
        <Col span={5}>
          {getFieldDecorator('table')(
            <Input placeholder="Mesa" />
          )}
        </Col>
        <Col span={11} style={{ textAlign: 'right' }}>
          <Button type="primary" onClick={submit} loading={loading}>
            Salvar
          </Button>
        </Col>
      </Row>

      <ProductsSelector form={form} />
    </Form>
  )
}
