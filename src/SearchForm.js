import React, { useState } from 'react'

import './style/SearchForm.css'

import SearchResults from './SearchResults'

import { searchNasa } from './api'

const SearchForm = () => {
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])

  const handleQueryChange = event => setQuery(event.target.value)

  const performQuery = async event => {
    event.preventDefault()

    setError(null)

    try {
      const result = await searchNasa({
        q: query
      })

      setImages(result.data)
    } catch (error) {
      setError('Sorry, but something went wrong.')
    }
  }
  
  return (
    <div>
      <form className="SearchForm" onSubmit={performQuery}>

        <input name="query" type="text" value={query} onChange={handleQueryChange} />

        <div className="ButtonBar">
          <button type="submit" disabled={!query}>Search</button>
        </div>

        {error && (
          <div className="error">
            {error}
            <p>Error has occurred!</p>
          </div>
        )}
      </form>
      <div className='ImageResults'>
        <SearchResults results={images} />
      </div>
    
    </div>
  )
}

export default SearchForm
