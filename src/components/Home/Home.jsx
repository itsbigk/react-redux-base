import React from 'react'
import { Link } from 'react-router'

if(process.env.BROWSER) {
  require('./style')
}

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        <h1 className="test">Working app!</h1>
      </div>
    )
  }
}

export default Home
