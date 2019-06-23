import React from 'react'
import { Form, Input, Row, Col } from 'antd'
import ProductInput from 'Inputs/Product'

export default ({ form }) => {
  const { getFieldDecorator, getFieldValue } = form

  const total_value = (getFieldValue('price_cents') || 0) * (getFieldValue('quantity') || 0)

  return (
    <Form layout="vertical">
      {getFieldDecorator('id')(<Input type="hidden" />)}

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Produto">
            {getFieldDecorator('product_id', {
              rules: [{ required: true, message: 'Produto é obrigatório' }],
            })(
              <ProductInput />
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Preço Unit">
            {getFieldDecorator('price_cents', {
              rules: [{ required: true, message: 'Preço unit é obrigatório' }],
            })(
              <Input placeholder="Informe o preço unit" />
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Quantidade">
            {getFieldDecorator('quantity', {
              rules: [
                { required: true, message: 'Quantidade é obrigatória' },
                { range: { min: 1 }, message: 'Deve ser maior que 0' }
              ],
              initialValue: 0,
            })(
              <Input placeholder="Informe a quantidade" />
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Valor Total">
            <Input value={total_value} disabled />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Observação">
            {getFieldDecorator('observation')(
              <Input.TextArea rows={4} placeholder="Informe uma observação" />
            )}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
