import React, { Component } from 'react'
import SearchForm from '../SearchForm.js';

import '../style/SearchResults.css'

class Search extends Component {
    render () {
        return (
            <div className="search-bar">
                <h1 className='searchTitle'>NASA Search!</h1>
                <SearchForm />
            </div>
        )
    }
}

export default Search