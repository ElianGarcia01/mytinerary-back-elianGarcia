import { Schema, model } from "mongoose";

let collection = "itineraries";

let schema = Schema(
  {
    user: {
      name_user: { type: String, required: true },
      photo: { type: String, required: true },
    },
    title: { type: String, required: true }, // nombre del itinerario
    price: { type: Number, min: 1, max: 5, required: true },
    duration: { type: Number, required: true }, // en horas
    likes: { type: Number, default: 0 },
    hashtags: [{ type: String, required: true }],
    city: {type: Schema.Types.ObjectId, ref: "cities", required: true}
  },
  {
    timestamps: true,
  }
);

let Itinerary = model(collection, schema);

export default Itinerary;
