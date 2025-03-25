import express from "express"
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan"

const app = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("Server ready in port: " + PORT)

app.listen(PORT, ready)

// Configuracion basica
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


