import React, { useState } from 'react'
import { searchEvents } from './api.js'
import CategoryResult from './CategoryResult.js'

function CategorySelection() {
    const [error, setError] = useState(null)
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState([])

    const handleQueryChange = event => setQuery(event.target.value)

    const handleSelection = async event => {
        event.preventDefault()

        setError(null)

        try {
            const result = await searchEvents ({
                q: query
            })

            setCategory(result.data)
        } catch (error) {
            setError('Something went wrong.')
        }
    }

    return (
        <div>
            <form className="CategorySelector" onSubmit={handleSelection}>
                <input type="text" value={query} onChange={handleQueryChange} />category<br></br>
                <div className="ButtonBar">
                    <button type="submit" disabled={!query}>Select Category!</button>
                </div>
                {error && (
                    <div className="error">
                    {error}
                    <p>Error has occurred!</p>
                    </div>
                )}
            </form>
            <CategoryResult results={category}/>
        </div>
    )
}

export default CategorySelection