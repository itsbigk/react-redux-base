import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  SET_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  set,
  increment,
  decrement,
  incrementIfOdd
} from './index'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore({})
const dispatch = expect.createSpy()

describe('Actions: Index', () => {
  it('should call the set counter function return an object with a set counter type and a value of 1', () => {
    expect(set(1)).toBeAn('object')
    expect(set(1)).toEqual({ type: SET_COUNTER, payload: 1 })
  })

  it('should call the increment function return an object with an increment counter type', () => {
    expect(increment()).toBeAn('object')
    expect(increment()).toEqual({ type: INCREMENT_COUNTER })
  })

  it('should call the decrement function and return an object with a decrement counter type', () => {
    expect(decrement()).toBeAn('object')
    expect(decrement()).toEqual({ type: DECREMENT_COUNTER })
  })

  it('should call the increment if odd action and return the increment object', () => {
    let getState = () => ({ counter: 1 })

    incrementIfOdd()(dispatch, getState)

    expect(incrementIfOdd()).toBeA('function')
    expect(dispatch).toHaveBeenCalledWith(increment())
  })
})

describe('Dispatcher: Index', () => {
  beforeEach(() => {
    store.clearActions()
  })

  it('should dispatch the set counter action', () => {
    store.dispatch(set(1))

    let actions = store.getActions()

    expect(actions).toEqual([set(1)])
  })

  it('should dispatch the increment action', () => {
    store.dispatch(increment())

    let actions = store.getActions()

    expect(actions).toEqual([increment()])
  })

  it('should dispatch the decrement action', () => {
    store.dispatch(decrement())

    let actions = store.getActions()

    expect(actions).toEqual([decrement()])
  })
})
