import { Schema, model } from "mongoose"

let collection = "user"

let schema = Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: Number, required: true }, // 0 = user, 1 = admin
    country: { type: String },
    verified: { type: Boolean, default: false },
    favorites: [{ type: Schema.Types.ObjectId, ref: "itinerary" }],
    bio: { type: String, maxlength: 280 },
    online: {type: Boolean, default: false}
}, {
    timestamps: true
})

let User = model(collection, schema)

export default User
