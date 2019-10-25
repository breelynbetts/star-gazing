import React from 'react'
import {Link, Router} from 'react-router-dom';

// import "./style/CategoryContent.css"

const CategoryContent = props => {
  const { category } = props
  return (
    <form>
      <div className="CategoryContent">
      {category.categories.map((subitem, item) => {
        return (
          <div>
            <input type="radio" id={item}/>
            <h2>{subitem.title}</h2>
            <h3>{subitem.link}</h3> 
            <p>Description: {subitem.description}</p>
          </div>
        )      
      })
      }
     </div>
    </form>
  )
}

export default CategoryContent