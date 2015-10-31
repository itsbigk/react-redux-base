import store from './store'
import dispatcher from '../dispatchers/AppDispatcher'
import ActionTypes from '../constants/ActionTypes'

const CHANGE_EVENT = 'change'

class UserStore extends store {
  constructor() {
    super()
    currentUser = {}
    users = []
  }

  getAllUsers() {
    return users
  }

  getCurrentUser() {
    return currentUser
  }
}

const userStore = new UserStore()

userStore.dispatchToken = dispatcher.register(action => {
  switch (action.type) {

    default:
      return
  }
})

export default userStore
