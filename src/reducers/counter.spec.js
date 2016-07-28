import counter from './counter'
import expect from 'expect'
import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER, incrementAsync } from '../actions'

const initialState = 1

describe('Reducer: Counter', () => {
  it('should have an initial state of 0', () => {
    expect(counter(undefined, {})).toBe(0)
  })

  it('should set the counter to 1', () => {
    expect(counter(undefined, { type: SET_COUNTER, payload: initialState })).toBe(1)
  })

  it('should increment the counter by 1', () => {
    expect(counter(0, { type: INCREMENT_COUNTER })).toBe(1)
  })

  it('should decrement the counter by 1', () => {
    expect(counter(2, { type: DECREMENT_COUNTER })).toBe(1)
  })
})
