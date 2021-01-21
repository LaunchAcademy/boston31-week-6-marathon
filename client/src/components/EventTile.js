import React from "react"
import { Link } from "react-router-dom"

const EventTile = ({ name, description, id }) => {
  return(
    <div className="callout">
      <h5><Link to={`/events/${id}`}> {name} </Link></h5>
      <p> {description} </p>
    </div>
  )
}

export default EventTile
