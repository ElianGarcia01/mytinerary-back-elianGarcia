import { Router } from "express"
import {allCities, cityById} from "../controllers/cities/read.js"
import {createCity, createCities} from "../controllers/cities/create.js"
import update from "../controllers/cities/update.js"

let routerCities = Router()

// Controladores para solicitudes get y post
routerCities.get("/allCities", allCities)
routerCities.get("/id/:nameId", cityById)
routerCities.post("/createCity", createCity)
routerCities.post("/createCities", createCities)
routerCities.put("/updateCity", update)


export default routerCities
