import mongoose from "mongoose"

let url = process.env.URI_MONGO

async function ConnectDB() {
  try {
    await mongoose.connect(url)
    console.log("database connected")
  } catch (error) {
    console.log(error)
  }
}

ConnectDB()