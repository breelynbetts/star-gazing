import React from 'react'
import "./style/NASAImage.css"
import { SRLWrapper } from "simple-react-lightbox"; 

const NASAImage = props => {
  const { image } = props
  console.log('image', image)
  return (
    <div className="NASAImage">
      <SRLWrapper>
      {image === undefined ? <div>Loading...</div> :
      <div>
        {!image[0] ? <div className='noResults'>No results found. Search again!<p>Try: 'Milky Way', 'Star', 'Galaxy' </p></div> :
        <div>
        {image.map((item, index) => {
          return (
            <div key={index}>
              {item.links.map((link) => {
              return (
                  <a href = {link.href} data-attribute="SRL">
                    <img src={link.href} alt={item.data[0].nasa_id} key={item.data[0].nasa_id} alt={item.data[0].title}/>
                  </a>
              )
              })}
              
            </div>
          )
        })}
        </div>
      }
      </div>
    }
      </SRLWrapper>
    </div>
  )
}

export default NASAImage
