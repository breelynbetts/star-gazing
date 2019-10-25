import React from 'react'
import {Link, Router} from 'react-router-dom';

// import "./style/CategoryContent.css"

const CategoryContent = props => {
  const { category } = props
  return (
    <div className="CategoryContent">
        <h2>{category.categories[0].title}</h2>
        {/* <Router>
          <Link src={category.categories[0].link}>title</Link>
        </Router> */}
        <h3>{category.categories[0].link}</h3> 
        <p>Description: {category.categories[0].description}</p>
    </div>
  )
}

export default CategoryContent