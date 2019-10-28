import React from 'react'

import "./style/APODImage.css"

const APODImage = props => {
  const { image } = props
  return (
    <div className="APODImage">
      <img className='apod'src={image.hdurl} alt={image.date} />
      <h2 className='readTitle'>Read About It!</h2>
      <div className='descriptionDiv'>
        <p className='description'>{image.explanation}</p>
      </div>
      <h4 className='dateSelected'>Date Selected: {image.date}</h4>
    </div>
  )
}

export default APODImage
