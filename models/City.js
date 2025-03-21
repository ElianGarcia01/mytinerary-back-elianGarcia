import { Schema, model } from "mongoose";

let collection = "cities";

let schema = Schema({
  name_city: { type: String, required: true },
  image: { type: String, required: true }, 
  country: { type: String, required: true },
  continent: { type: String, required: true },
  description: { type: String, required: true },
  currency: { type: String, required: true },
  time_zone: { type: String, required: true },
  population: { type: Number, required: true },
  tourist_places: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
  main_language: { type: String, required: true },
})

let City = model(collection, schema)

export default City