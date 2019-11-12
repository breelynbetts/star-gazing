import React, { useState, useEffect } from 'react'
import { searchAstronomyPicture } from './api.js'
import DateResult from './DateResult.js'
import moment from 'moment'; 

import './style/DateSelector.css'

import { apiHost } from './api'

function DateSelector() {
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [date, setDate] = useState([])

  useEffect(() => apiHost('https://api.nasa.gov/planetary'))
  
  const handleQueryChange = event => setQuery(event.target.value)
  
  const handleInput = async event  => {
      event.preventDefault()
  
      setError(null)
  
      try {
        const result = await searchAstronomyPicture({
          date: query,
        })
        setDate([result])
      } catch (error) {
        setError('Sorry, but something went wrong.')
      }
  }

  return (
      <div>
        <form className="DatePicker" onSubmit={handleInput}>
          <input name="query" type="date" value={query} onChange={handleQueryChange} max={ moment().format('YYYY-MM-DD')}/>
          <div className="ButtonDiv">
            <button type="submit" disabled={!query}>select date</button>
          </div>
          {error && (
            <div className="error">
              {error}
            </div>
          )}
        </form>
        <div className='DateResult'>
          <DateResult results={date}/>
        </div>
    </div>
  )
}
export default DateSelector