import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

import sinon from 'sinon'

import SearchForm from './SearchForm'

import * as api from './api'

// This test suite uses a distinct testing technique called _snapshot testing_. Go take
// a peek at the code then come back here for more commentary.
//
// Note how, with snapshot testing, you are truly dependent on that descriptive text.
// The enforcement is in the snapshot match, not a condition that is in the test code.
// This is where snapshot testing differs from traditional test-driven development:
// _It assumes that the code works initially._ This actually does line up fairly well
// with user interface development, because it tends to be easier to just “eyeball” a
// user interface first rather than write tests against it.
//
// It takes some adjustment to start “trusting” a snapshot test, just as it takes some
// adjustment to trust version control. If you want to manually check whether a snapshot
// is truly in the state that you want it to be, you can always look at the .snap file
// within the __snapshots__ folder.
//
// Handy reference:
// https://semaphoreci.com/community/tutorials/snapshot-testing-react-components-with-jest
//
it('should start with an empty search field', () => {
  const component = TestRenderer.create(<SearchForm />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should start with a disabled search button', () => {
  const component = TestRenderer.create(<SearchForm />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('search button', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
    ReactTestUtils.act(() => {
      ReactDOM.render(<SearchForm />, div)
    })
  })

  afterEach(() => ReactDOM.unmountComponentAtNode(div))

  it('should be enabled when the search field is not blank', () => {
    const searchInput = div.querySelector('input')
    ReactTestUtils.act(() => {
      searchInput.value = 'i can haz unit tests'
      ReactTestUtils.Simulate.change(searchInput)
    })

    const searchButton = div.querySelector('button')
    expect(searchButton.disabled).toBe(false)
  })

  it('should be disabled when the search field is blank', () => {
    const searchInput = div.querySelector('input')
    ReactTestUtils.act(() => {
      searchInput.value = ''
      ReactTestUtils.Simulate.change(searchInput)
    })

    const searchButton = div.querySelector('button')
    expect(searchButton.disabled).toBe(true)
  })
})

// Helper function for the next two test collections.
const setupAndQuerySearchForm = async () => {
  const div = document.createElement('div')
  ReactTestUtils.act(() => {
    ReactDOM.render(<SearchForm />, div)
  })

  const searchInput = div.querySelector('input')
  ReactTestUtils.act(() => {
    searchInput.value = 'hello'
    ReactTestUtils.Simulate.change(searchInput)
  })

  const searchForm = div.querySelector('form')
  await ReactTestUtils.act(async () => {
    await ReactTestUtils.Simulate.submit(searchForm)
  })

  return div
}

describe('API calls', () => {
  let div
  beforeEach(async () => {
    sinon.stub(api, 'searchNasa')

    // To manage size, we supply a mock response that contains _only_ what the app will need. This does mean
    // that we need to revise the mock response if our app starts using more (or different) data.
    api.searchNasa.returns(Promise.resolve({
      data: [
        {
          "href": "https://images-assets.nasa.gov/image/PIA20695/collection.json",
          "links": [{
            "rel": "preview",
            "href": "https://images-assets.nasa.gov/image/PIA20695/PIA20695~thumb.jpg",
            "render": "image"
          }],
          "data": [{
            "title": "Frankenstein Galaxy",
            "description_508": "NASA's GALEX reveals the true nature of UGC 1382, dubbed the Frankenstein galaxy. Scientists have discovered that UGC 1382 is a giant, and one of the largest isolated galaxies known.",
            "date_created": "2016-07-11T15:50:52Z",
            "description": "The galaxy UGC 1382 has been revealed to be far larger and stranger than previously thought. Astronomers relied on a combination of ground-based and space telescopes to uncover the true nature of this \"Frankenstein galaxy.\" The composite image shows the same galaxy as viewed with different instruments. The component images are also available.  In the image at left, UGC 1382 appears to be a simple elliptical galaxy, based on optical data from the Sloan Digital Sky Survey (SDSS). But spiral arms emerged when astronomers incorporated ultraviolet data from the Galaxy Evolution Explorer (GALEX) and deep optical data from SDSS, as seen in the middle image. Combining that with a view of low-density hydrogen gas (shown in green), detected at radio wavelengths by the Very Large Array, scientists discovered that UGC 1382 is a giant, and one of the largest isolated galaxies known.  GALEX in particular was able detect very faint features because it operated from space, which is necessary for UV observations because ultraviolet light is absorbed by the Earth's atmosphere. Astronomers also used Stripe 82 of SDSS, a small region of sky where SDSS imaged the sky 80 times longer than the original standard SDSS survey. This enabled optical detection of much fainter features as well.  http://photojournal.jpl.nasa.gov/catalog/PIA20695",
            "secondary_creator": "NASA/JPL/Caltech/SDSS/NRAO",
            "media_type": "image",
            "keywords": [
              "Galaxy Evolution Explorer GALEX"
            ],
            "nasa_id": "PIA20695",
            "center": "JPL"
          }]
        }
      ]
    }))

    div = await setupAndQuerySearchForm()
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div)
    api.searchNasa.restore()
  })

  it('should trigger a NASA search when the search button is clicked', () => {
    // Note how this _isn’t_ a snapshot test because we’re checking whether a function was called with
    // the right arguments.
    expect(api.searchNasa.firstCall.args[0]).toEqual({
      q: 'hello',
      media_type: "image", // Our test search term.
    })
  })

  it('should populate the image container when search results arrive', () => {
    // Our mock search results yield one image, so we expect our results container to have one child.
    const searchResults = div.querySelector('div.ImageResults')
    expect(searchResults.children.length).toEqual(1)
  })
})

describe('failed API calls', () => {
  let div
  beforeEach(async () => {
    sinon.stub(api, 'searchNasa')
    api.searchNasa.returns(Promise.reject('Mock failure'))

    div = await setupAndQuerySearchForm()
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div)
    api.searchNasa.restore()
  })

  it('should display an alert when the API call fails', () => {
    // The document should contain the error div.
    const searchError = div.querySelector('div.error')
    expect(searchError.textContent).toEqual('Sorry, but something went wrong.')
  })
})