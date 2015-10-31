import { Dispatcher } from 'flux'
import ActionTypes from '../constants/ActionTypes'

class AppDispatcher extends Dispatcher {

  handleServerAction(action) {
    console.log('In dispatcher for server action: %s', action)
    if(!action.type) {
      throw new Error('Empty action')
    }

    this.dispatch({
      source: ActionTypes.SERVER_ACTION,
      action: action
    })
  }

  handleViewAction(action) {
    console.log('In dispatcher for view action: %s', action)
    if(!action.type) {
      throw new Error('Empty action')
    }

    this.dispatch({
      source: ActionTypes.VIEW_ACTION,
      action: action
    })
  }
}

const dispatcher = new AppDispatcher()

export default dispatcher
