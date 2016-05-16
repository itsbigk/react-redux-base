import Store from './store'
import AppTypes from '../constants/AppConstants'

class newStore extends Store {
  constructor() {
    super()
    this.subscribe(() => this._registerToActions.bind(this))
  }

  _registerToActions(action) {
    switch(action.type) {
      // add cases
      default:
        return
    }
    this.emitChange()
  }
}

export default new newStore()
