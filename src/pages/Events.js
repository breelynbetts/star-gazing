import React, { Component } from 'react'
import CategorySelection from '../CategorySelection.js'

class Events extends Component {
    render () {
        return (
            <div>
                <h1>Current Events</h1>
                <p>Click on a category below to see current events!</p>
                <CategorySelection />
            </div>
        )
    }
}

export default Events