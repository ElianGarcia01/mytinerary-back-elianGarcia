import { Router } from "express"
import { allUsers, validateToken } from "../controllers/users/read.js"
import passport from "../middlewares/passport.js"

const routerUsers = Router()

routerUsers.get("/allUsers", passport.authenticate('jwt',{session: false}),allUsers)
routerUsers.get('/validateToken',passport.authenticate('jwt',{session:false}), validateToken)

export default routerUsers