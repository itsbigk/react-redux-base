import React from 'react'
import Router from 'react-router'
// import routes from './config/routes'

// Router.run(routes, (Root) => {
//   React.render(<Root />, document.getElementById('app'))
// })

class App extends React.Component {
  render() {
    return (
      <div>Working App</div>
    )
  }
}

React.render(<App />, document.getElementById('app'))
