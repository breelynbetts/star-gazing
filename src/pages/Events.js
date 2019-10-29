import React, { Component } from 'react'
import CategorySelection from '../CategorySelection.js'

import '../style/Events.css'

class Events extends Component {
    render () {
        return (
            <div>
                <h1 className='eventsTitle'>Current Events</h1>
                <CategorySelection />
            </div>
        )
    }
}

export default Events