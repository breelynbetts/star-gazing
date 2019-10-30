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

describe('date button', () => {
    let div
    beforeEach(() => {
        div = document.createElement('div')
        ReactTestUtils.act(() => {
            ReactDOM.render(<DateSelector />, div)
        })
    })

    afterEach(() => ReactDOM.unmountComponentAtNode(div))

    it('should be enabled when the date field is fully filled out', () => {
        const dateInput = div.querySelector('input')
        ReactTestUtils.act(() => {
            dateInput.value = '1999-09-25'
            ReactTestUtils.Simulate.change(dateInput)
        })

        const dateButton = div.querySelector('button')
        expect(dateButton.disabled).toBe(false)
    })

    it('should be disabled when a valid date is not entered', () => {
        const dateInput = div.querySelector('input')
        ReactTestUtils.act(() => {
            dateInput.value = 'this should break!'
            ReactTestUtils.Simulate.change(dateInput)
        })

        const dateButton = div.querySelector('button')
        expect(dateButton.disabled).toBe(true)
    })
})
  


