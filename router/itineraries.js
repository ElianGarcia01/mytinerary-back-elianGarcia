import { Router } from "express"
import { allItineraries, itineraryByCity, itineraryById } from "../controllers/itineraries/read.js"
import createItinerary from "../controllers/itineraries/create.js"
import updateItinerary from "../controllers/itineraries/update.js"
import deleteItinerary from "../controllers/itineraries/delete.js"

let routerItineraries = Router()

// Controladores para solicitudes
routerItineraries.get("/allItineraries", allItineraries)
routerItineraries.get("/city/:nameCity", itineraryByCity)
routerItineraries.get("/id/:nameId", itineraryById)
routerItineraries.post("/createItinerary", createItinerary)
routerItineraries.put("/updateItinerary", updateItinerary)
routerItineraries.delete("/deleteItinerary", deleteItinerary)

export default routerItineraries
