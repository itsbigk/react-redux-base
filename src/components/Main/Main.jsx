import React from 'react'
import { Link } from 'react-router'
import '../../scss/application.scss'

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
