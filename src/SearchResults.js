import React, { Component } from 'react'

import './style/SearchResults.css'

import NASAImage from './NASAImage'

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        {this.props.results.map(image => <NASAImage key={image.id} image={image} />)}
      </div>
    )
  }
}

export default SearchResults
