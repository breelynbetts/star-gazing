import React from 'react'

import "./style/APODImage.css"
import ResizeImageWithSlider from './components/ResizeImageWithSlider'

const APODImage = props => {
  const { image } = props
  return (
    <div className="APODImage" key={image.date}>
      <ResizeImageWithSlider img={image.url}/>
      {/* <img className='apod'src={image.url} alt={image.date} /> */}
      <div className='descriptionDiv'>
        <h2 className='readTitle'>{image.title}</h2>
        <p className='description'>
          {image.explanation} <br/><br/>
          Date Selected: {image.date}
        </p>
      </div>
    </div>
  )
}

export default APODImage
