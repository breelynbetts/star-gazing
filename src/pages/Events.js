import React, { Component } from 'react'
import CategorySelection from '../CategorySelection.js'
import CategoriesModal from '../CategoriesModal'

import '../style/Events.css'

class Events extends Component {
    
    render () {
        return (
            <div>
                <h1 className='eventsTitle'>Current Events</h1>
                {/* <Map /> */}
                <CategoriesModal />
                <CategorySelection />
            </div>
        )
    }
}

export default Events