import React, { Component } from 'react'
import SearchForm from '../SearchForm.js';

class Search extends Component {
    render () {
        return (
            <div className="search-bar">
                <SearchForm />
            </div>
        )
    }
}

export default Search