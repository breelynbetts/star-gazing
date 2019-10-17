import React from 'react'

import "./NASAImage.css"

const NASAImage = props => {
  const { image } = props
  return (
    <div className="NASAImage">
      <img src={image.img_src} alt={image.earth_date} />
    </div>
  )
}

export default NASAImage
