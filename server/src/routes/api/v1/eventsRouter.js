import express from "express"

import { Event } from "../../../models/index.js"

const eventsRouter = new express.Router()

eventsRouter.get("/", async (req, res) => {
  try {
    const events = await Event.query()
    return res.status(200).json({ events })
  }
  catch(err) {
    return res.status(500).json({ errors: err })
  }
})

eventsRouter.get("/:id", async (req, res) => {
  const id = req.params.id

  try {
    const event = await Event.query().findById(id)
    return res.status(200).json({ event })
  }
  catch(err) {
    return res.status(500).json({ errors: err })
  }
})

export default eventsRouter