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
  incrementAsync
} from './index'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Actions: Index', () => {
  it('should equal an object from calling the set counter function', () => {
    expect(set(1)).toBeA('object')
  })

  it('should call the set counter function return an object with a set counter type and a value of 1', () => {
    expect(set(1)).toEqual({ type: SET_COUNTER, payload: 1 })
  })

  it('should equal an object from calling the increment function', () => {
    expect(increment()).toBeA('object')
  })

  it('should call the increment function return an object with an increment counter type', () => {
    expect(increment()).toEqual({ type: INCREMENT_COUNTER })
  })

  it('should equal an object from calling the decrement function', () => {
    expect(decrement()).toBeA('object')
  })

  it('should call the decrement function and return an object with a decrement counter type', () => {
    expect(decrement()).toEqual({ type: DECREMENT_COUNTER })
  })
})
