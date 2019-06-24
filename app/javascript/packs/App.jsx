import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, LocaleProvider } from 'antd'
import ptBR from 'antd/lib/locale-provider/pt_BR'
import axios from 'axios'
import routes from 'Components/routes'

import 'Components/General.sass'

const { Header, Content, Footer } = Layout

axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name=csrf-token]').content

const App = () => {

  return (
    <LocaleProvider locale={ptBR}>
      <Router>
        <Layout className="layout">
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[window.location.pathname]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="/">
                <Link to="/">
                  Pedidos
                </Link>
              </Menu.Item>
              <Menu.Item key="/customers">
                <Link to="/customers">
                  Clientes
                </Link>
              </Menu.Item>
              <Menu.Item key="/foods">
                <Link to="/foods">
                  Lanches
                </Link>
              </Menu.Item>
              <Menu.Item key="/products">
                <Link to="/products">
                  Produtos
                </Link>
              </Menu.Item>
              <Menu.Item key="/purchases">
                <Link to="/purchases">
                  Compras
                </Link>
              </Menu.Item>
              <Menu.Item key="/accounting">
                <Link to="/">
                  Caixa
                </Link>
              </Menu.Item>
              <Menu.Item key="/reports">
                <Link to="/">
                  Relatórios
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', minHeight: 'calc(100vh - 133px)' }}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Cantinho do Lanche ©2019 Anthony Nadaletti
          </Footer>
        </Layout>
      </Router>
    </LocaleProvider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app-home'),
  )
  setTimeout(() => {
    document.getElementById('loader').style.opacity = '0'
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none'
    }, 300)
  }, 1000)
})
