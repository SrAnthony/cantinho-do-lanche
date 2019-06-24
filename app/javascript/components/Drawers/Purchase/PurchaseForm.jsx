import React from 'react'
import { Form, Input, InputNumber, Row, Col } from 'antd'
import ProductInput from 'Inputs/Product'
import { formatCurrency, numberParser } from 'Utils/formatters'

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
              <InputNumber
                formatter={formatCurrency}
                parser={numberParser}
                style={{ width: '100%' }}
              />
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Quantidade">
            {getFieldDecorator('quantity', {
              rules: [
                { required: true, message: 'Quantidade é obrigatória' }
              ],
              initialValue: 0,
            })(
              <InputNumber
                placeholder="Informe a quantidade"
                min={1}
                style={{ width: '100%' }}
              />
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Valor Total">
            <InputNumber
              value={total_value}
              formatter={formatCurrency}
              parser={numberParser}
              style={{ width: '100%' }}
              disabled
            />
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
