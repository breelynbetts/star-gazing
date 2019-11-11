import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

import sinon from 'sinon'

import * as api from './api'
import CategorySelection from './CategorySelection'


it('should start with events on the page', () => {
  const component = TestRenderer.create(<CategorySelection />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

const setupAndLoadPage = async () => {
    const div = document.createElement('div')
    await ReactTestUtils.act(async () => {
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
        data: [{
          "title": "EONET Events",
          "description": "Natural events from EONET.",
          "link": "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events",
          "events": [
            {
              "id": "EONET_4475",
              "title": "Wildfires - Los Angeles County (Tick Fire), California, United States",
              "description": "",
              "link": "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_4475",
              "categories": [
                {
                  "id": 8,
                  "title": "Wildfires"
                }
              ],
              "sources": [{
                "id": "PDC",
                "url": "http://emops.pdc.og/emops/?hazard_id=96981"
              }],
              "geometries": [
                {
                  "date": "2019-10-24T18:16:00Z",
                  "type": "Point",
                  "coordinates": [
                    -118.39468413,
                    34.457634347
                  ]
                }
              ]
            }]
          }]
      }))
  
      div = await setupAndLoadPage()
    })
  
    afterEach(() => {
      ReactDOM.unmountComponentAtNode(div)
      api.searchEvents.restore()
    })

    it('should populate the event container when results arrive', () => {
      // Our mock search results yield one image, so we expect our results container to have one child.
      const searchResults = div.querySelector('div.eventDiv')
      expect(searchResults.children.length).toEqual(2)
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