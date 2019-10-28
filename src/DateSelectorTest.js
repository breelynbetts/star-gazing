import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

import sinon from 'sinon'

import DateSelector from './DateSelector'

import * as api from './api'

it('should start with no date selected', () => {
    const component = TestRenderer.create(<DateSelector />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

it('should start with a disabled selection button', () => {
    const component = TestRenderer.create(<DateSelector />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

describe('date selection', () => {
    let div
    beforeEach(() => {
        div = document.createElement('div')
        ReactTestUtils.act(() => {
            ReactDOM.render(<DateSelector />, div)
        })
    })
})
  
afterEach(() => ReactDOM.unmountComponentAtNode(div))