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
  incrementAsync,
  incrementIfOdd
} from './index'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore({})
const dispatch = expect.createSpy()

describe('Actions: Index', () => {
  it('should equal an object from calling the set counter function', () => {
    expect(set(1)).toBeAn('object')
  })

  it('should call the set counter function return an object with a set counter type and a value of 1', () => {
    expect(set(1)).toEqual({ type: SET_COUNTER, payload: 1 })
  })

  it('should equal an object from calling the increment function', () => {
    expect(increment()).toBeAn('object')
  })

  it('should call the increment function return an object with an increment counter type', () => {
    expect(increment()).toEqual({ type: INCREMENT_COUNTER })
  })

  it('should equal an object from calling the decrement function', () => {
    expect(decrement()).toBeAn('object')
  })

  it('should call the decrement function and return an object with a decrement counter type', () => {
    expect(decrement()).toEqual({ type: DECREMENT_COUNTER })
  })

  it('should equal a function from calling the increment async function', () => {
    expect(incrementAsync()).toBeA('function')
  })

  it('should dispatch an action', () => {
    const incrementAction = { type: INCREMENT_COUNTER }

    store.dispatch(incrementAction)

    const actions = store.getActions()

    expect(actions).toEqual([incrementAction])
  })

  it('should call the increment if odd action and return the increment object', () => {
    const getState = () => ({ counter: 1 })

    incrementIfOdd()(dispatch, getState)

    expect(dispatch).toHaveBeenCalledWith(increment())
  })

  it('should call the increment async action and return the increment object', () => {
    incrementAsync()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(increment())
  })
})
