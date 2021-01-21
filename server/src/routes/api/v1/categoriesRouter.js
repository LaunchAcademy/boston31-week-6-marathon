import express from "express"
import categoryEventsRouter from "./categoryEventsRouter.js"
import { Category } from "../../../models/index.js"

const categoriesRouter = new express.Router()

categoriesRouter.use("/:categoryId/events", categoryEventsRouter)

categoriesRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.query()
    return res.status(200).json({ categories })
  }
  catch(err) {
    return res.status(500).json({ errors: err })
  }
})

categoriesRouter.get("/:id", async (req, res) => {
  const id = req.params.id
  // const { id } = req.params

  try {
    const category = await Category.query().findById(id)
    // console.log(category)
    category.events = await category.$relatedQuery('events')
    // console.log(category.events)
    return res.status(200).json({ category })
  }
  catch(err) {
    return res.status(500).json({ errors: err })
  }
})

export default categoriesRouter