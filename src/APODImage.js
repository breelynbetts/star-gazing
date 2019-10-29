import React from 'react'

import "./style/APODImage.css"

const APODImage = props => {
  const { image } = props
  return (
    <div className="APODImage">
      <img className='apod'src={image.hdurl} alt={image.date} />
      <div className='descriptionDiv'>
        <h2 className='readTitle'>Read About It!</h2>
        <p className='description'>{image.explanation}</p>
      </div>
    </div>
  )
}

export default APODImage
