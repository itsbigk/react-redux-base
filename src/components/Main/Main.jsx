import React from 'react'
import { Link } from 'react-router'

import '../../application.css'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Link to="/home">Home</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Main
