import express from "express"

import { Category } from "../../../models/index.js"

const categoriesRouter = new express.Router()

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

  try {
    const category = await Category.query().findById(id)
    return res.status(200).json({ category })
  }
  catch(err) {
    return res.status(500).json({ errors: err })
  }
})

export default categoriesRouter