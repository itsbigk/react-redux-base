import React from 'react'
import { Link } from 'react-router'

import '../../css/application.css'

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
