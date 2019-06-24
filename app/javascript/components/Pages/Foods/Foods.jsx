import React, { useState, useEffect, useRef } from 'react'
import { Button, message } from 'antd'
import axios from 'axios'
import FoodsTable from './FoodsTable'
import FoodDrawer from 'Drawers/Food'

export default () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchFoods = () => {
    axios.get('/foods.json')
      .then(result => setData(result.data))
      .finally(() => setLoading(false))
  }

  const destroyFood = id => {
    axios.delete(`/foods/${id}.json`)
      .then(() => {
        message.success('Lanche deletado com sucesso!')
        fetchFoods()
      })
  }

  useEffect(fetchFoods, [])

  const foodDrawerRef = useRef()

  return (
    <div className="content-wrapper customers">
      <div className="content-title">
        <h1>Lanches</h1>
      </div>
      <div className="content-actions">
        <Button type="primary" onClick={() => foodDrawerRef.current.open()}>
          Novo lanche
        </Button>
      </div>

      <section className="content-section">
        <FoodsTable
          data={data}
          openDrawer={id => foodDrawerRef.current.open(id)}
          destroyFood={destroyFood}
          loading={loading}
        />
      </section>

      <FoodDrawer
        wrappedComponentRef={foodDrawerRef}
        onUpdate={fetchFoods}
      />
    </div>
  )
}
