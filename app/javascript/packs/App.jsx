import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, LocaleProvider } from 'antd'
import ptBR from 'antd/lib/locale-provider/pt_BR'
import routes from 'Components/routes'

import 'Components/General.sass'

const { Header, Content, Footer } = Layout

const App = () => {

  return (
    <LocaleProvider locale={ptBR}>
      <Router>
        <Layout className="layout">
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['/']}
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
})
