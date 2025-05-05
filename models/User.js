import { Schema, model } from "mongoose"

let collection = "user"

let schema = Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    country: { type: String },
    verified: { type: Boolean, default: false },
    favorites: [{ type: Schema.Types.ObjectId, ref: "itinerary" }],
    online: {type: Boolean, default: false},
    googleId: { type: String, unique: true, sparse: true },
    from_google: { type: Boolean, default: false }
}, {
    timestamps: true
})

let User = model(collection, schema)

export default User
