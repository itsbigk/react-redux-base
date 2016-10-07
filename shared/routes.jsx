import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import { Main } from '../src/components/Main'
import { Home } from '../src/containers'
import { NotFound } from '../src/components/NotFound'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="home" component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)

export default routes
