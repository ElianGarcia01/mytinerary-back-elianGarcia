import { Router } from "express"
import routerCities from "./cities.js"


let routerIndex = Router()

routerIndex.use("/cities", routerCities )

export default routerIndex