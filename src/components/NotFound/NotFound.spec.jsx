import React from 'react'
import NotFound from './NotFound'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'

const renderNotFound = (props = {}) => {
  const renderer = TestUtils.createRenderer()

  renderer.render(<NotFound {...props} />)

  return renderer.getRenderOutput()
}

describe('Conponent: NotFound', () => {
  it('renders a div with an id of not-found', () => {
    let { props, type } = renderNotFound()

    expect(props.id).toBe('not-found')
    expect(type).toEqual('div')
  })

  it('should be an h1 as the first child and text of Whoops...', () => {
    let { props } = renderNotFound()
    let firstChild = props.children[0]

    expect(firstChild.type).toEqual('h1')
    expect(firstChild.props.children).toEqual('Whoops...')
  })

  it('should be a p as the second child and text of We cannot find the page you requested.', () => {
    let { props } = renderNotFound()
    let secondChild = props.children[1]

    expect(secondChild.type).toEqual('p')
    expect(secondChild.props.children).toEqual('We cannot find the page you requested.')
  })

  it('should be a functional component as the third child and text of Return to home', () => {
    let { props } = renderNotFound()
    let thirdChild = props.children[2]

    expect(typeof(thirdChild.type)).toEqual('function')
    expect(thirdChild.props.to).toEqual('home')
    expect(thirdChild.props.children).toEqual('Return to home')
  })
})
