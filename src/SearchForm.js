import React, { useState, useEffect } from 'react'
import './style/SearchForm.css'
import SearchResults from './SearchResults'
import { searchNasa } from './api'
import { apiHost } from './api'
import SimpleReactLightbox from "simple-react-lightbox"; 

const SearchForm = () => {
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])

  useEffect(() => apiHost('https://images-api.nasa.gov'))

  const handleQueryChange = event => setQuery(event.target.value)

  const performQuery = async event => {
    event.preventDefault()

    setError(null)

    try {
      const result = await searchNasa({
        q: query,
        media_type: 'image',
      })
      setImages([result.collection.items])
    } catch (error) {
      setError('Sorry, but something went wrong.')
    }
  }
  const options = {
    overlayColor: "rgb(255, 255, 255, 0.9)",
    captionStyle: {
      captionColor: "black",
      captionFontFamily: "Staatliches, cursive",
      captionFontSize: "20px",
    },
    buttonsStyle: {
      buttonsBackgroundColor: 'white',
      buttonsIconColor: "black"
    },
    autoplaySpeed: 0,
    transitionSpeed: 0,
    showThumbnails: false,
  };

  return (
    <div>
      <form className="SearchForm" onSubmit={performQuery}>

        <input name="query" type="text" value={query} onChange={handleQueryChange} />

        <div className="ButtonBar">
          <button type="submit" disabled={!query}>search</button>
        </div>

        {error && (
          <div className="error">
            {error}
          </div>
        )}
      </form>
      <div className='ImageResults'>
        {images === undefined ? <div>Loading ... </div> :
          <SimpleReactLightbox {...options}>
            <SearchResults results={images} />
          </SimpleReactLightbox>
        } 
      </div>
    
    </div>
  )
}

export default SearchForm
