import express from "express"
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan"
import routerIndex from "./router/index.js"
import not_found_handler from "./middlewares/not-found-handler.js"
import error_handler from "./middlewares/error_handler.js"
import error_400 from "./middlewares/error_400.js"

const app = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("Server ready in port: " + PORT)

// Configuracion basica
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// Enrutador configuracion
app.use("/api",routerIndex)
app.use(not_found_handler)
app.use(error_400)
app.use(error_handler)


app.listen(PORT, ready)