import { Router } from "express"

import {allCities, cityById} from "../controllers/cities/read.js"
import {createCity, createCities} from "../controllers/cities/create.js"

let routerCities = Router()

// Enrutadores
routerCities.get("/allCities", allCities)
routerCities.get("/id/:nameId", cityById)
routerCities.post("/createCities", createCities)

export default routerCities
