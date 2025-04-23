import { Router } from "express"
import routerCities from "./cities.js"
import routerItineraries from "./itineraries.js"


let routerIndex = Router()

routerIndex.use("/cities", routerCities )
routerIndex.use("/itineraries", routerItineraries)

export default routerIndex