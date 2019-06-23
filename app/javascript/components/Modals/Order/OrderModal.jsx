import React from 'react'
import { Modal, Form } from 'antd'
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
        />
      </Modal>
    )
  }
}

export default Form.create({})(OrderModal)
