import React from 'react'
import { RouteHandler } from 'react-router'
import UserStore from '../stores/userStore'
import DeviceStore from '../stores/deviceStore'

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: UserStore.getCurrentUser(),
      devices: DeviceStore.getDeviceList()
    }
  }

  render() {
    return (
      <div>
        {/* Add navbar */}
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main
