import React, { useState, useEffect } from "react"

import NewEventForm from "./NewEventForm"
import EventTile from "./EventTile"
import ErrorList from "./ErrorList"
import translateServerErrors from "../services/translateServerErrors"

const CategoryShow = props => {
  const [category, setCategory] = useState({
    events: []
  })
  const [errors, setErrors] = useState([])

  const categoryId = props.match.params.id

  const getCategory = async () => {
    try {
      const response = await fetch(`/api/v1/categories/${categoryId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const body = await response.json()
      setCategory(body.category)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getCategory()
  }, [])

  const postEvent = async (newEventData) => {
    try {
      const response = await fetch(`/api/v1/categories/${categoryId}/events`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newEventData)
      })
      if (!response.ok) {
          if(response.status === 422) {
            const body = await response.json()
            const newErrors = translateServerErrors(body.errors)
            return setErrors(newErrors)
          } else {
            const errorMessage = `${response.status} (${response.statusText})`
            const error = new Error(errorMessage)
            throw(error)
          }
        } else {
          const body = await response.json()
          const updatedEvents = category.events.concat(body.event)
          setErrors([])
          setCategory({...category, events: updatedEvents})
        }
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const eventTiles = category.events.map(eventObject => {
    return(
      <EventTile
        key={eventObject.id}
        {...eventObject}
      />
    )
  })

  return(
    <div>
      <h1>{category.name}</h1>
      <h4>Category Events:</h4>
      {eventTiles}
      <div>
        <ErrorList errors={errors} />
        <NewEventForm
          postEvent={postEvent}
        />
      </div>
    </div>
  )
}

export default CategoryShow
