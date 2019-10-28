import React, { Component } from 'react'
import SearchForm from '../SearchForm.js';

class Search extends Component {
    render () {
        return (
            <div className="search-bar">
                <h3>NASA Search!</h3>
                <SearchForm />
            </div>
        )
    }
}

export default Search