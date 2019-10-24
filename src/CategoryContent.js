import React from 'react'

// import "./style/EventContent.css"

const EventContent = props => {
  const { event } = props
  return (
    <div className="EventContent">
        <h2>{event.title}</h2>
        <link>{event.categories.link}</link>
        <p>Description: {event.categories.description}</p>
    </div>
  )
}

export default EventContent