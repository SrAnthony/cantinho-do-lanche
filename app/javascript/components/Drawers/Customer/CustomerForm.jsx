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
          <Form.Item label="Telefone">
            {getFieldDecorator('phone')(
              <Input placeholder="Informe o telefone" />
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Aniversário">
            {getFieldDecorator('birthday')(
              <Input placeholder="Informe o aniversário" />
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Email">
            {getFieldDecorator('email')(
              <Input placeholder="Informe o email" />
            )}
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
