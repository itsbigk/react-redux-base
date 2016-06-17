import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import { Main } from '../components/Main'
import { Home } from '../containers'
import { NotFound } from '../components/NotFound'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="home" component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)

export default routes
