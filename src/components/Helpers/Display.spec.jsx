import React from 'react'
import Display from './Display'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'

const renderDisplay = val => {
  const renderer = TestUtils.createRenderer()

  renderer.render(
    <Display if={val}>
      <div className="display"></div>
    </Display>
  )

  return renderer.getRenderOutput()
}

describe('Component: Display', () => {
  it('renders a div with a className of display', () => {
    const { props, type } = renderDisplay(true)

    expect(props.className).toInclude('display')
    expect(type).toEqual('div')
  })

  it('will not render the component when passing false to the method', () => {
    expect(renderDisplay(false)).toBe(null)
  })
})
