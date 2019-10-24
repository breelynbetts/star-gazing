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
            <CategoryResult results={category}/>
        </div>
    )
}

export default CategorySelection