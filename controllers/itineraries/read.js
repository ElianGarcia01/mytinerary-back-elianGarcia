import Itinerary from "../../models/Itinerary.js"
import "../../models/City.js"

let allItineraries = async (req, res, next) => {
  try {
    let all = await Itinerary.find().populate("city", "name_city").exec()

    return res.status(200).json({
      response: all,
    });
  } catch (error) {
    next(error)
  }
}

export default allItineraries
