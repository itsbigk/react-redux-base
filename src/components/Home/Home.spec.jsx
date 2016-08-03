import React from 'react'
import Home from './Home'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'

const renderHome = (props = {}) => {
  const renderer = TestUtils.createRenderer()

  renderer.render(<Home {...props} />)

  return renderer.getRenderOutput()
}

describe('Conponent: Home', () => {
  it('renders a div with a className of home', () => {
    const { props, type } = renderHome()

    console.log(props.children[0])

    expect(props.className).toInclude('home')
    expect(type).toEqual('div')
  })
})
