import React from 'react'
import Router from 'react-router'
import ReactDOM from 'react-dom'
import routes from './config/routes'

Router.run(routes, (Root) => {
  ReactDOM.render(<Root />, document.getElementById('app'))
})

// @TODO make sure that this works before delete
// class App extends React.Component {
//   render() {
//     return (
//       <div>Working App</div>
//     )
//   }
// }
//
// React.render(<App />, document.getElementById('app'))
