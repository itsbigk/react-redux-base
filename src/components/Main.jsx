import React from 'react'
import { RouteHandler, Link } from 'react-router'

if(process.env.BROWSER) {
  require('../scss/application.scss')
}

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        {/* Add navbar */}
        <Link to="/home">Home</Link>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main
