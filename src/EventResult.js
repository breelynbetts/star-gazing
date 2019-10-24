import React from 'react'

import EventContent from './EventContent.js'

const EventResult = props => (
    <div className="EventResults">
      {props.results.map(event => <EventContent event={event} />)}
    </div>
)

export default EventResult