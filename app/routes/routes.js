import React from 'react'
import { Router } from 'react-router'
import { render } from 'react-dom'
import routes from '../../src/config/routes'
import AppActionCreators from '../../src/actions/appActionCreators'
import createBrowserHistory from 'history/lib/createBrowserHistory'

let history = createBrowserHistory()

// @TODO begin action for app init to make sure the components have the latest content
// the stores will pick on the dispatch from the action if they have a case in the switch

export default function() {
  render(<Router history={history}>{routes}</Router>, document.getElementById('app'))
}







// module.exports = function(app) {
//   app.get('/', function(req, res) {
//     res.render('index.html');
//   });
// }
