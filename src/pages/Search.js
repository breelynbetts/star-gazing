import React, { Component } from 'react'
import SearchForm from '../SearchForm.js';

class Search extends Component {
    render () {
        return (
            <div className="search-bar">
                <h1 className='title'>NASA Search!</h1>
                <SearchForm />
            </div>
        )
    }
}

export default Search