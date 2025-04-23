import { Router } from "express"
import {allCities, cityById} from "../controllers/cities/read.js"
import {createCity, createCities} from "../controllers/cities/create.js"
import update from "../controllers/cities/update.js"
import allItineraries from "../controllers/itineraries/read.js"
import createItinerary from "../controllers/itineraries/create.js"

let routerCities = Router()

// Controladores para solicitudes get y post
routerCities.get("/allCities", allCities)
routerCities.get("/allItineraries", allItineraries)
routerCities.get("/id/:nameId", cityById)
routerCities.post("/createCity", createCity)
routerCities.post("/createItinerary", createItinerary)
routerCities.post("/createCities", createCities)
routerCities.put("/updateCity", update)


export default routerCities
