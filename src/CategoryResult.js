import React from 'react'

import CategoryContent from './CategoryContent.js'

const CategoryResult = props => (
    <div className="CategoryResults">
      {props.data.map(category => <CategoryContent category={category} />)}
    </div>
)

export default CategoryResult