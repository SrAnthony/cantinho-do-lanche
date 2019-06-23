import React from 'react'
import { Form, Drawer, Button, message } from 'antd'
import axios from 'axios'
import ProductForm from './ProductForm'

class ProductDrawer extends React.Component {
  state = {
    visible: false,
    loading: false,
    editing: false,
  }

  open = id => {
    this.setState({ visible: true }, () => {
      if (id) this.openWithId(id)
    })
  }

  close = () => {
    this.props.form.resetFields()
    this.setState({ visible: false, loading: false, editing: false })
    this.props.onUpdate()
  }

  openWithId = id => {
    this.setState({ editing: true })
    axios.get(`/product/${id}.json`)
      .then(result => {
        this.props.form.setFieldsValue(result.data)
      })
  }

  submit = () => {
    this.props.form.validateFields((errors, values) => {
      if (errors) return
      this.setState({ loading: true })

      this.state.editing ? this.update(values) : this.create(values)
    })
  }

  create = data => {
    axios.post('/products.json', data)
      .then(() => {
        message.success('Produto criado com sucesso!')
        this.close()
      })
      .catch(err => {
        message.error('Não foi possível criar o produto')
        console.log({ err })
      })
      .finally(() => this.setState({ loading: false }))
  }

  update = data => {
    axios.patch(`/products/${data.id}.json`, data)
      .then(() => {
        message.success('Produto atualizado com sucesso!')
        this.close()
      })
      .catch(err => {
        message.error('Não foi possível atualizar o produto')
        console.log({ err })
      })
      .finally(() => this.setState({ loading: false }))
  }

  render() {
    const { form } = this.props
    const { visible, loading, editing } = this.state

    return (
      <Drawer
        title={`${editing ? 'Editando' : 'Novo'} produto`}
        visible={visible}
        width={500}
        onClose={this.close}
      >
        <ProductForm form={form} />

        <div className="ant-drawer-actions">
          <Button onClick={this.close} style={{ marginRight: 8 }}>
            Cancelar
          </Button>
          <Button onClick={this.submit} type="primary" loading={loading}>
            {editing ? 'Atualizar' : 'Salvar'}
          </Button>
        </div>
      </Drawer>
    )
  }
}

export default Form.create({})(ProductDrawer)
