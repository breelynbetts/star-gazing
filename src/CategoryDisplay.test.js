import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

import sinon from 'sinon'

import * as api from './api'
import CategorySelection from './CategorySelection'
import CategoryDisplay from './CategoryDisplay'


it('should start with events on the page', () => {
  const component = TestRenderer.create(<CategoryDisplay />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

const setupAndLoadPage = async () => {
    const div = document.createElement('div')
    await ReactTestUtils.act(async () => {
      ReactDOM.render(<CategoryDisplay />, div)
    })
    
    return div
  }

describe('API calls', () => {
    let div
    beforeEach(async () => {
      sinon.stub(api, 'getCategories')
  
      // To manage size, we supply a mock response that contains _only_ what the app will need. This does mean
      // that we need to revise the mock response if our app starts using more (or different) data.
      api.getCategories.returns(Promise.resolve({
        categories: [
            {
                "id": 6,
                "title": "Drought",
                "link": "https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/6",
                "description": "Long lasting absence of precipitation affecting agriculture and livestock, and the overall availability of food and water.",
                "layers": "https://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/6"
            }
        ]
      }))
  
      div = await setupAndLoadPage()
    })
  
    afterEach(() => {
      ReactDOM.unmountComponentAtNode(div)
      api.getCategories.restore()
    })

    it('should populate the event container when results arrive', () => {
      // Our mock search results yield one image, so we expect our results container to have one child.
      const searchResults = div.querySelector('div.categories')
      expect(searchResults.children.length).toEqual(1)
    })
  
  })
  
  describe('failed API calls', () => {
    let div
    beforeEach(async () => {
      sinon.stub(api, 'getCategories')
      api.getCategories.returns(Promise.reject('Mock failure'))
  
      div = await setupAndLoadPage()
    })
  
    afterEach(() => {
      ReactDOM.unmountComponentAtNode(div)
      api.getCategories.restore()
    })
  
    it('should display an alert when the API call fails', () => {
      // The document should contain the error div.
      const searchError = div.querySelector('div.error')
      expect(searchError.textContent).toEqual('Sorry, but something went wrong.')
    })
  })