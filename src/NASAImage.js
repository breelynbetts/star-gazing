import React from 'react'

import "./style/NASAImage.css"

const NASAImage = props => {
  const { image } = props
  return (
    <div className="NASAImage">
      {image.links === undefined || image.data === undefined ? <div>Loading...</div> :
      <div>
        {image.data.map((id) => {
          return (
            <div key={id.nasa_id}>
              {image.links.map((image) => {
              return (
                <img src={image.href} alt={id.nasa_id} key={id.nasa_id}/>
              )
              })}
            </div>
          )
        })}
        
      </div>
    }
      
    </div>
  )
}

export default NASAImage
