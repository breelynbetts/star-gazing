import React from 'react'

import "./style/APODImage.css"

const APODImage = props => {
  const { image } = props
  return (
    <div className="APODImage" key={image.date}>
      <img className='apod'src={image.url} alt={image.date} />
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
