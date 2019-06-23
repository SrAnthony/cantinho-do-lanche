import React from 'react'
import { Modal, Form, message } from 'antd'
import OrderForm from './OrderForm'

import './styles.sass'

class OrderModal extends React.Component {
  state = {
    visible: true,
    loading: false,
  }

  open = () => {
    this.setState({ visible: true })
  }

  close = () => {
    this.setState({ visible: false, loading: false })
  }

  submit = () => {
    this.props.form.validateFields((errors, values) => {
      if (errors) return

      if (values.products.length == 0)
        return message.info('Você deve selecionar ao menos um produto')

      message.success('Pedido criado com sucesso!')

      console.log({ values })
    })
  }

  render() {
    const { visible, loading } = this.state
    const { form } = this.props

    return (
      <Modal
        title="Novo pedido"
        visible={visible}
        confirmLoading={loading}
        width={800}
        footer={null}
        className="order-modal"
      >
        <OrderForm
          form={form}
          submit={this.submit}
        />
      </Modal>
    )
  }
}

export default Form.create({})(OrderModal)
