import { Router } from "express"

import citiesReadController from "../controllers/cities/read.js"

let routerCities = Router()

routerCities.get("/allCities", citiesReadController)

export default routerCities
