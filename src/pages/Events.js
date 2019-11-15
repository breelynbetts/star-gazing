import React, { Component } from 'react'
import CategorySelection from '../CategorySelection.js'
import CategoriesModal from '../CategoriesModal'
import MapDisplay from '../components/MapDisplay'
import '../style/Events.css'

class Events extends Component {
    
    render () {
        return (
            <div>
                <h1 className='eventsTitle'>Current Events</h1>
                <CategoriesModal />
                <MapDisplay />
                <CategorySelection />
            </div>
        )
    }
}

export default Events