import React from 'react'

// import "./style/APODImage.css"

const APODImage = props => {
  const { image } = props
  return (
    <div className="APODImage">
      <img src={image.hdurl} alt={image.date} />
      <h4>Date Selected: {image.date}</h4>
      <p>Description: {image.explanation}</p>
    </div>
  )
}

export default APODImage
