import React from 'react'

import './GiphyImage.css'

const GiphyImage = props => {
  const { image } = props
  return (
    <div className="GiphyImage">
      <img src={image.img_src} alt={image.earth_date} />
    </div>
  )
}

export default GiphyImage
