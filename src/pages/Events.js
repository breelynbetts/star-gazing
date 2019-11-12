import React, { Component } from 'react'
import CategorySelection from '../CategorySelection.js'
// import Map from '../components/Map.js'

import '../style/Events.css'

class Events extends Component {
    
    render () {
        return (
            <div>
                <h1 className='eventsTitle'>Current Events</h1>
                {/* <Map /> */}
                <CategorySelection />
            </div>
        )
    }
}

export default Events