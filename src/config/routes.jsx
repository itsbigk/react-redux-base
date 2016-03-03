import React from 'react'
import { Router, Route } from 'react-router'

import Main from '../components/Main/Main'
import Home from '../components/Home/Home'
import NotFound from '../components/NotFound/NotFound'

var routes = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="home" component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)

export default routes
