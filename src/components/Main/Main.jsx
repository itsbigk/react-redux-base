import React from 'react'
import { Link } from 'react-router'

if(process.env.BROWSER) {
  require('../../scss/application')
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {/* Add navbar */}
        <Link to="/home">Home</Link>

        {this.props.children}

      </div>
    )
  }
}

export default Main
