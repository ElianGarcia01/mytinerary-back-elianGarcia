import { Router } from "express"
import { allUsers } from "../controllers/users/read.js"
import passport from "../middlewares/passport.js"

const routerUsers = Router()

routerUsers.get("/allUsers", passport.authenticate('jwt',{session: false}),allUsers)

export default routerUsers