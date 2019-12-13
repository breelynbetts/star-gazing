import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './ResizeImageWithSlider.css'

const STATE_IDLE = 'idle'
const STATE_DRAGGING = 'dragging'

const ResizeImageWithSlider = props => {
  const { img, onChange} = props
  
  const [status, setStatus] = useState(STATE_IDLE)
  const [anchorX, setAnchorX] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(0)
  const [sliderColor, setSliderColor ] = useState('white')
  const [imgSize, setImageSize] = useState('250px')
  const [divHeight, setDivHeight] = useState('300px')

  const handleMouseDown = event => {
    setStatus(STATE_DRAGGING)
    setAnchorX(event.screenX - sliderPosition)
    setSliderColor('#e6e3e3')
  }

  const handleMouseMove = event => {
    if (status === STATE_DRAGGING) {
      const currentPosition = sliderPosition
      const newPosition = event.screenX - anchorX

      if (newPosition >= 0 && newPosition <= 200) {
        setSliderPosition(newPosition)
        setImageSize(newPosition + 250)
        setDivHeight(newPosition + 300)
      }

      if (onChange) {
        onChange(currentPosition, newPosition)
      }
    }
  }

  const handleMouseUp = event => {
    if (status === STATE_DRAGGING) {
      setStatus(STATE_IDLE)
      setSliderColor('white')
    }
  }

  const currentStyle = () => ({
    transform: `perspective(500px) translateX(${sliderPosition}px)`,
    backgroundColor: `${sliderColor}`
  })
  
  const imgStyle = () => ({
    height: `${imgSize}px`,
    width: `${imgSize}px`,
    objectFit: `cover`,
  })

  const wrapHeight = () => ({
    height: `${divHeight}px`,
  })
   
  // Other mouse events go at the level of the document because
  // they might leave the element's bounding box.
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    // The listeners are removed via the cleanup function, which if present is given as the return value
    // of the `useEffect` function.
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return (
    <div style={wrapHeight()} className='title'>
      <div className="Slider">
        <div className="SliderCircle" onMouseDown={handleMouseDown} style={currentStyle()}></div>
      </div>
      <img className='SliderImage' style={imgStyle()} src={img}/>
    </div>
  )
}

ResizeImageWithSlider.propTypes = {
  img: PropTypes.string,
  onChange: PropTypes.func
}

export default ResizeImageWithSlider
