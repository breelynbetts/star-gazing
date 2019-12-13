import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'

import ResizeImageWithSlider from './ResizeImageWithSlider'

describe('Swivel direct manipulation component', () => {
  let div  // This is declared here so that the entire test suite can get to it.

  const transformUpdateTest = () => {
    const slide = div.querySelector('.SliderCircle')

    ReactTestUtils.act(() => {
      ReactTestUtils.Simulate.mouseDown(slide, { screenX: 20 })
    })

    // We use separate act calls to let the first event “play out” fully before we invoke the next one.
    ReactTestUtils.act(() => {
      // The document-level event isn’t under React’s control so we invoke events on it in the same way that we would
      // do it in a web browser.
      document.dispatchEvent(new MouseEvent('mousemove', { screenX: 10 }))
    })

    // Now we check the element’s rendered style.
    expect(slide.style.transform).toEqual('perspective(500px) translateX(0px)')

    ReactTestUtils.act(() => {
      document.dispatchEvent(new MouseEvent('mousemove', { screenX: 30 }))
    })

    expect(slide.style.transform).toEqual('perspective(500px) translateX(10px)')

    // We do this just for completeness; for _this particular_ component, the event has no rendered effect.
    ReactTestUtils.act(() => {
      document.dispatchEvent(new MouseEvent('mouseup'))
    })
  }

  describe('installed behavior with callback', () => {
    const mockOnChange = jest.fn()

    beforeEach(() => {
      div = document.createElement('div')
      ReactDOM.render(<ResizeImageWithSlider img="https://images-assets.nasa.gov/image/PIA14090/PIA14090~thumb.jpg" onChange={mockOnChange} />, div)
    })

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(div)
    })

    it('should update its CSS transform correctly', transformUpdateTest)

    // We can’t inspect the internal state of hook-based React components because, as local variables, they are
    // completely inaccessible to the outside. We must rely on the correctness of the rendered component to assure
    // ourselves that the internal state has the correct value.

    it('should invoke the callback correctly', () => {
      mockOnChange.mockReset()

      const slider = div.querySelector('.SliderCircle')

      ReactTestUtils.act(() => {
        ReactTestUtils.Simulate.mouseDown(slider, { screenX: 20 })
      })

      ReactTestUtils.act(() => {
        document.dispatchEvent(new MouseEvent('mousemove', { screenX: 10 }))
      })

      // This time, we check whether our callback got invoked correctly.
      expect(mockOnChange.mock.calls[0]).toEqual([0, -10])

      ReactTestUtils.act(() => {
        document.dispatchEvent(new MouseEvent('mousemove', { screenX: 30 }))
      })

      expect(mockOnChange.mock.calls[1]).toEqual([0, 10])

      // We do this just for completeness; for _this particular_ component, the event has no rendered effect.
      ReactTestUtils.act(() => {
        document.dispatchEvent(new MouseEvent('mouseup'))
      })
    })
  })

  describe('installed behavior without callback', () => {
    beforeEach(() => {
      div = document.createElement('div')
      ReactDOM.render(<ResizeImageWithSlider img="https://images-assets.nasa.gov/image/PIA14090/PIA14090~thumb.jpg" />, div)
    })

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(div)
    })

    it('should update its CSS transform correctly', transformUpdateTest)
  })
})
