import React from 'react'

// import "./style/CategoryContent.css"

const CategoryContent = ({props = []}) => {
  const { category } = props
  
  return (
      <div className="CategoryContent">
      {category.events.map((subitem, item) => {
        return (
          <div>
            <h2>{subitem.title}</h2>
            <h3>{subitem.link}</h3> 
            {/* {subitem.categories.map((category) => {
                return (
                  <h1>{category.title}</h1>
                )
            })} */}
            {/* {subitem.geometries.map((location) => {
                return (
                    <div className={location}>
                        <p>location: {location.coordinates}</p>
                    </div>
                )
            })} */}
          </div>
        )      
      })
      }
     </div>

  )
}

export default CategoryContent