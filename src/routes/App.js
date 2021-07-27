import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import NoFound from '../containers/NotFound.jsx'
import Player from '../containers/Player.jsx'
import Layout from '../components/Layout'

// the :id is a way to pass property a our route
const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/player/:id" component={Player} />
        <Route component={NoFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
