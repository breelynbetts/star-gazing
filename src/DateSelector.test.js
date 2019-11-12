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
  

const setupAndQueryDataForm = async () => {
    const div = document.createElement('div')
    ReactTestUtils.act(() => {
      ReactDOM.render(<DateSelector />, div)
    })
  
    const dateInput = div.querySelector('input')
    ReactTestUtils.act(() => {
      dateInput.value = '1999-09-25'
      ReactTestUtils.Simulate.change(dateInput)
    })
  
    const dateSelector = div.querySelector('form')
    await ReactTestUtils.act(async () => {
      await ReactTestUtils.Simulate.submit(dateSelector)
    })
  
    return div
}

describe('API calls', () => {
    let div
    beforeEach(async () => {
      sinon.stub(api, 'searchAstronomyPicture')
  
      // To manage size, we supply a mock response that contains _only_ what the app will need. This does mean
      // that we need to revise the mock response if our app starts using more (or different) data.
      api.searchAstronomyPicture.returns(Promise.resolve({
        data: [{
            "copyright": "Eric Wagner",
            "date": "2019-10-10",
            "explanation": "On September 24, a late evening commercial flight from Singapore to Australia offered stratospheric views of the southern hemisphere's night sky, if you chose a window seat. In fact, a well-planned seating choice with a window facing toward the Milky Way allowed the set up of a sensitive digital camera on a tripod mount to record the galaxy's central bulge in a series of 10 second long exposures.  By chance, one of the exposures caught this bright fireball meteor in the starry frame. Reflected along the wing of the A380 aircraft, the brilliant greenish streak is also internally reflected in the double layer window, producing a fainter parallel to the original meteor track. In the southern sky Jupiter is the bright source beneath the galactic bulge and seen next to a green beacon, just off the wing tip.",
            "hdurl": "https://apod.nasa.gov/apod/image/1910/MWBolideEricWagner2400.jpg",
            "media_type": "image",
            "service_version": "v1",
            "title": "Mid-Air Meteor and Milky Way",
            "url": "https://apod.nasa.gov/apod/image/1910/MWBolideEricWagner1200.jpg"
        }]
      }))
  
      div = await setupAndQueryDataForm()
    })
  
    afterEach(() => {
      ReactDOM.unmountComponentAtNode(div)
      api.searchAstronomyPicture.restore()
    })
  
    it('should trigger a Astronomy Picture search when the search button is clicked', () => {
      // Note how this _isn’t_ a snapshot test because we’re checking whether a function was called with
      // the right arguments.
      expect(api.searchAstronomyPicture.firstCall.args[0]).toEqual({
        date: '1999-09-25' // Our test search term.
      })
    })
  
    it('should populate the image container when search results arrive', () => {
      // Our mock search results yield one image, so we expect our results container to have one child.
      const searchResults = div.querySelector('div.DateResult')
      expect(searchResults.children.length).toEqual(1)
    })
})

describe('failed API calls', () => {
    let div
    beforeEach(async () => {
      sinon.stub(api, 'searchAstronomyPicture')
      api.searchAstronomyPicture.returns(Promise.reject('Mock failure'))
  
      div = await setupAndQueryDataForm()
    })
  
    afterEach(() => {
      ReactDOM.unmountComponentAtNode(div)
      api.searchAstronomyPicture.restore()
    })
  
    it('should display an alert when the API call fails', () => {
      // The document should contain the error div.
      const searchError = div.querySelector('div.error')
      expect(searchError.textContent).toEqual('Sorry, but something went wrong.')
    })
  })