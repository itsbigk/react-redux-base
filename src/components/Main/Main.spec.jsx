import React from 'react'
import Main from './Main'
import expect from 'expect'
import { shallow } from 'enzyme'

const renderMain = (props = {}) => {
  const wrapper = shallow(<Main {...props} />)

  return { wrapper }
}

describe('Conponent: Main', () => {
  it('renders a div', () => {
    const { wrapper } = renderMain()

    expect(wrapper.type()).toEqual('div')
  })
})
