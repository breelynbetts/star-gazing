import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

import sinon from 'sinon'

import * as api from './api'
import CategorySelection from './CategorySelection'


it('should start with an empty search field', () => {
  const component = TestRenderer.create(<CategorySelection />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

const setupAndLoadPage = async () => {
    const div = document.createElement('div')
    ReactTestUtils.act(() => {
      ReactDOM.render(<CategorySelection />, div)
    })
  
    // const searchInput = div.querySelector('input')
    // ReactTestUtils.act(() => {
    //   searchInput.value = 'hello'
    //   ReactTestUtils.Simulate.change(searchInput)
    // })
  
    // const searchForm = div.querySelector('form')
    // await ReactTestUtils.act(async () => {
    //   await ReactTestUtils.Simulate.submit(searchForm)
    // })
  
    return div
  }

describe('API calls', () => {
    let div
    beforeEach(async () => {
      sinon.stub(api, 'searchEvents')
  
      // To manage size, we supply a mock response that contains _only_ what the app will need. This does mean
      // that we need to revise the mock response if our app starts using more (or different) data.
      api.searchEvents.returns(Promise.resolve({
        data: [
          {
            id: 'FiGiRei2ICzzG',
            source_tld: 'tumblr.com',
            images: {
              fixed_width: {
                url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200w.gif'
              }
            }
          }
        ]
      }))
  
      div = await setupAndLoadPage()
    })
  
    afterEach(() => {
      ReactDOM.unmountComponentAtNode(div)
      api.searchEvents.restore()
    })
  
  })
  
  describe('failed API calls', () => {
    let div
    beforeEach(async () => {
      sinon.stub(api, 'searchEvents')
      api.searchEvents.returns(Promise.reject('Mock failure'))
  
      div = await setupAndLoadPage()
    })
  
    afterEach(() => {
      ReactDOM.unmountComponentAtNode(div)
      api.searchEvents.restore()
    })
  
    it('should display an alert when the API call fails', () => {
      // The document should contain the error div.
      const searchError = div.querySelector('div.error')
      expect(searchError.textContent).toEqual('Sorry, but something went wrong.')
    })
  })