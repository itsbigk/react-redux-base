import React from 'react'
import Main from './Main'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'

const renderMain = (props = {}) => {
  const renderer = TestUtils.createRenderer()

  renderer.render(<Main {...props} />)

  return renderer.getRenderOutput()
}

describe('Conponent: Main', () => {
  it('renders a div', () => {
    const { props, type } = renderMain()

    expect(type).toEqual('div')
  })
})
