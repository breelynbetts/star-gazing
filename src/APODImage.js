import React from 'react'

import "./style/APODImage.css"

const APODImage = props => {
  const { image } = props
  return (
    <div className="APODImage" key={image.data}>
      <img className='apod'src={image.hdurl} alt={image.date} />
      <div className='descriptionDiv'>
        <h2 className='readTitle'>{image.title}</h2>
        <p className='description'>{image.explanation}</p>
      </div>
    </div>
  )
}

export default APODImage
