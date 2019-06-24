import React, { useState } from 'react'
import { Form, Input, InputNumber, Row, Col, Table, Button } from 'antd'
import { formatCurrency, numberParser } from 'Utils/formatters'
import ProductInput from 'Inputs/Product'

export default ({ form }) => {
  const [products, setProducts] = useState([{ id: Math.random() }])

  const { getFieldDecorator } = form

  const addProduct = () => {
    setProducts([ ...products, { id: Math.random() } ])
  }

  const products_columns = [{
    title: 'Produto',
    key: 'product',
    render: (_, product) => (
      <div>
        {getFieldDecorator(`foods_products_attributes[${product.id}][id]`, {
          initialValue: product.id < 1 ? null : product.id, // Random é sempre menor que 1
        })(
          <Input type="hidden" />
        )}
        {getFieldDecorator(`foods_products_attributes[${product.id}][product_id]`, {
          initialValue: product.product_id,
        })(
          <ProductInput />
        )}
      </div>
    )
  }, {
    title: 'Quantidade',
    key: 'quantity',
    width: 150,
    render: (_, product) => (
      getFieldDecorator(`foods_products_attributes[${product.id}][quantity]`, {
        initialValue: product.quantity || 1,
      })(
        <InputNumber
          min={1}
          style={{ width: '100%' }}
          placeholder="Quantidade"
        />
      )
    )
  }]

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
          <Form.Item label="Pontos ganhos">
            {getFieldDecorator('points_earn')(
              <Input placeholder="Informe os pontos" />
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Pontos necessários">
            {getFieldDecorator('points_needed')(
              <Input placeholder="Informe os pontos" />
            )}
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Table
          columns={products_columns}
          dataSource={products}
          rowKey={item => item.id}
          pagination={false}
          style={{ margin: '0 -16px' }}
        />
        <Button type="dashed" style={{ marginTop: 10 }} onClick={addProduct}>
          Adicionar produto
        </Button>
      </Row>
    </Form>
  )
}
