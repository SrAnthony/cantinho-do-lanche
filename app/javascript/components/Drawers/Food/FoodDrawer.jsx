import React from 'react'
import { Form, Drawer, Button, message } from 'antd'
import axios from 'axios'
import FoodForm from './FoodForm'

class FoodDrawer extends React.Component {
  state = {
    visible: false,
    loading: false,
    editing: false,

    foods_products: [{ id: Math.random() }],
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

  addFoodProduct = () => {
    const { foods_products } = this.state
    this.setState({ foods_products: [ ...foods_products, { id: Math.random() } ] })
  }

  removeFoodProduct = id => {
    const { foods_products } = this.state
    const index = foods_products.findIndex(fp => fp.id == id)
    foods_products[index]._destroy = true
    this.props.form.setFieldsValue({ [`foods_products_attributes[${id}][_destroy]`]: true })
    this.setState({ foods_products })
  }

  openWithId = id => {
    const { setFieldsValue } = this.props.form
    this.setState({ editing: true })

    axios.get(`/food/${id}.json`)
      .then(result => {
        this.setState({ foods_products: result.data.foods_products })
        result.data.foods_products.forEach(f_product => {
          setFieldsValue({
            [`foods_products_attributes[${f_product.id}][id]`]: f_product.id,
            [`foods_products_attributes[${f_product.id}][product_id]`]: f_product.product_id,
            [`foods_products_attributes[${f_product.id}][quantity]`]: f_product.quantity,
          })
        })
        setFieldsValue(result.data)
      })
  }

  submit = () => {
    this.props.form.validateFields((errors, values) => {
      if (errors) return
      this.setState({ loading: true })

      values.foods_products_attributes = Object.values(values.foods_products_attributes)
        .filter(product => !!product.product_id && !!product.quantity)

      this.state.editing ? this.update(values) : this.create(values)
    })
  }

  create = data => {
    axios.post('/foods.json', data)
      .then(() => {
        message.success('Lanche criado com sucesso!')
        this.close()
      })
      .catch(err => {
        message.error('Não foi possível criar o lanche')
        console.log({ err })
      })
      .finally(() => this.setState({ loading: false }))
  }

  update = data => {
    axios.patch(`/foods/${data.id}.json`, data)
      .then(() => {
        message.success('Lanche atualizado com sucesso!')
        this.close()
      })
      .catch(err => {
        message.error('Não foi possível atualizar o lanche')
        console.log({ err })
      })
      .finally(() => this.setState({ loading: false }))
  }

  render() {
    const { form } = this.props
    const { visible, loading, editing, foods_products } = this.state

    return (
      <Drawer
        title={`${editing ? 'Editando' : 'Novo'} lanche`}
        visible={visible}
        width={500}
        onClose={this.close}
      >
        <FoodForm
          form={form}
          foods_products={foods_products}
          addFoodProduct={this.addFoodProduct}
          removeFoodProduct={this.removeFoodProduct}
        />

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

export default Form.create({})(FoodDrawer)
