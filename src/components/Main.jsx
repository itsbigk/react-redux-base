import React from 'react'
import RouteHandler from 'react-router'

class Main extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        // Add navbar
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    )
  }
}

export default Main
