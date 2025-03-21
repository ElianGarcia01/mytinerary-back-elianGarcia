import mongoose from "mongoose";

let url = process.env.URI_MONGO;

// mongoose
//   .connect(url)
//   .then(() => console.log("database conected"))
//   .catch((error) => console.log(error))


async function ConnectDB() {
  try {
    await mongoose.connect(url)
    console.log("database connected")
  } catch (error) {
    console.log(error)
  }
}

ConnectDB()