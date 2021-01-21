import React, { useState } from "react"

const NewEventForm = ({ postEvent }) => {
  const [newEvent, setNewEvent] = useState({
    name: "",
    description: "",
  })

  const handleInputChange = event => {
    setNewEvent({
      ...newEvent,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postEvent(newEvent)
    clearForm()
  }

  const clearForm = () => {
    setNewEvent({
      name: "",
      description: ""
    })
  }

  return (
    <div className="callout">
      <h1>Add an Event to this Category</h1>
      <form onSubmit={handleSubmit} >
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={newEvent.name}
          />
        </label>

        <label>
          Description (Optional):
          <input
            type="text"
            name="description"
            onChange={handleInputChange}
            value={newEvent.description}
          />
        </label>

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default NewEventForm
