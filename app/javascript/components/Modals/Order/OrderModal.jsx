import React from 'react'
import { Modal, Form, message } from 'antd'
import axios from 'axios'
import OrderForm from './OrderForm'

import './styles.sass'

class OrderModal extends React.Component {
  state = {
    visible: false,
    loading: false,
  }

  open = () => {
    this.setState({ visible: true })
  }

  close = () => {
    this.props.form.resetFields()
    this.setState({ visible: false, loading: false })
  }

  submit = () => {
    this.props.form.validateFields((errors, values) => {
      if (errors) return

      if (values.foods.length == 0)
        return message.info('Você deve selecionar ao menos um lanche')

      this.setState({ loading: true })

      Promise.all(values.foods.map(food => {
        const data = {
          table: values.table,
          customer_id: values.customer_id,
          food_id: food,
        }
        return axios.post('/orders', { order: data })
      }))
        .then(() => {
          message.success('Pedido criado com sucesso!')
          this.close()
          this.props.onUpdate()
        })
        .catch(() => message.error('Não foi possível criar o pedido'))
        .finally(() => this.setState({ loading: false }))
    })
  }

  render() {
    const { visible, loading } = this.state
    const { form } = this.props

    return (
      <Modal
        title="Novo pedido"
        visible={visible}
        width={800}
        footer={null}
        onCancel={this.close}
        className="order-modal"
      >
        <OrderForm
          form={form}
          submit={this.submit}
          loading={loading}
        />
      </Modal>
    )
  }
}

export default Form.create({})(OrderModal)
