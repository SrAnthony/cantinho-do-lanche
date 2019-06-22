import React from 'react'
import Orders from 'Pages/Orders'
import Customers from 'Pages/Customers'
import Products from 'Pages/Products'
import Purchases from 'Pages/Purchases'

const Routes = [
  {
    path: '/',
    exact: true,
    component: () => <Orders />
  },
  {
    path: '/customers',
    exact: true,
    component: () => <Customers />
  },
  {
    path: '/products',
    exact: true,
    component: () => <Products />
  },
  {
    path: '/purchases',
    exact: true,
    component: () => <Purchases />
  },
]

export default Routes
