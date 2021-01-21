import express from "express"

import categoriesRouter from "./api/v1/categoriesRouter.js"
import eventsRouter from "./api/v1/eventsRouter.js"
import clientRouter from "./clientRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/categories", categoriesRouter)
rootRouter.use("/api/v1/events", eventsRouter)
rootRouter.use("/", clientRouter)

export default rootRouter
