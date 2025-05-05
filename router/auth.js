import { Router } from "express"
import signUp from "../controllers/auth/signUp.js"
import schemaSignUp from "../schemas/auth/signUp.js"
import validator from "../middlewares/validator.js"
import accountExists from "../middlewares/accountExists.js"
import createHash from "../middlewares/createHash.js"
import signIn from "../controllers/auth/signIn.js"
import schemaSignIn from "../schemas/auth/signIn.js"
import accountNoExists from "../middlewares/accountNoExists.js"
import validedPassword from "../middlewares/validedPassword.js"
import generateToken from "../middlewares/generateToken.js"
import verifyToken from "../middlewares/verifyToken.js"
import signOut from "../controllers/auth/signOut.js"
import googleAuth from "../controllers/auth/googleAuth.js"

const routerAuth = Router()

routerAuth.post("/signUp", validator(schemaSignUp), accountExists, createHash, signUp)
routerAuth.post('/signIn', validator(schemaSignIn), accountNoExists, validedPassword, generateToken, signIn)
routerAuth.post('/signOut', verifyToken, signOut)
routerAuth.post('/google', googleAuth)

export default routerAuth