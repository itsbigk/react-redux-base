import Store from './store'
import AppDispatcher from '../dispatchers/AppDispatcher'
import AppTypes from '../constants/AppTypes'

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

let NewStore = new newStore()

export default NewStore
