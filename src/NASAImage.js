import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import "./style/NASAImage.css"

const NASAImage = props => {
  const { image } = props
  return (
    <div className="NASAImage">
      {image === undefined ? <div>Loading...</div> :
      <div>
        {image.map((item, index) => {
          return (
            <div key={index}>
              {item.links.map((link) => {
              return (
                <SRLWrapper>
                  <a href={link.href} data-attribute="SRL">
                    <img src={link.href} alt={item.data[0].nasa_id} key={item.data[0].nasa_id}/>
                  </a>
                </SRLWrapper>
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
