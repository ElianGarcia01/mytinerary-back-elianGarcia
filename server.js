import express from "express"
import "dotenv/config.js"
import "./config/database.js"

const app = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("Server ready in port: " + PORT)

app.listen(PORT, ready)

