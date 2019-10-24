import React from 'react'

import APODImage from './APODImage.js'

const DateResult = props => (
    <div className="SearchResults">
      {props.results.map(image => <APODImage image={image} />)}
    </div>
)

export default DateResult