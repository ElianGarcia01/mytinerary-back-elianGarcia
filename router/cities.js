import { Router } from "express"

import {allCities, cityById} from "../controllers/cities/read.js"

let routerCities = Router()

// Enrutadores
routerCities.get("/allCities", allCities)
routerCities.get("/id/:nameId", cityById)

export default routerCities
