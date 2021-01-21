import React, { useState, useEffect } from "react"

const EventShow = props => {
  const [event, setEvent] = useState({
    guests: []
  })

  const getEvent = async () => {
    const eventId = props.match.params.id
    try {
      const response = await fetch(`/api/v1/events/${eventId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const body = await response.json()
      setEvent(body.event)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getEvent()
  }, [])

  const guestListItems = event.guests.map(guestObject => {
    return(
      <li key={guestObject.id}>
        {guestObject.firstName} {guestObject.lastName}
      </li>
    )
  })

  return(
    <div>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <hr />
      <h4>Event Guests:</h4>
      {guestListItems}
    </div>
  )
}

export default EventShow
