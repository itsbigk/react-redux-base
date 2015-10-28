import React from 'react'
import { RouteHandler } from 'react-router'

class Main extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <div>
        // Add navbar
        <div className="container">
          <RouteHandler {...this.state} />
        </div>
      </div>
    )
  }
}

export default Main
