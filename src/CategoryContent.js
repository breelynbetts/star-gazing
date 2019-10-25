import React from 'react'
import {Link, Router} from 'react-router-dom';

// import "./style/CategoryContent.css"

const CategoryContent = props => {
  const { category } = props
  return (
    <div className="CategoryContent">
      {category.categories.map((subitem, item) => {
        return (
          <div>
            <h2>{subitem.title}</h2>
            <h3>{subitem.link}</h3> 
            <p>Description: {subitem.description}</p>
          </div>
        )      
      })
      }
    </div>
  )
}

export default CategoryContent