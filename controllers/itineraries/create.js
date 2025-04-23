import Itinerary from "../../models/Itinerary.js";

let createItinerary = async (req, res, next) => {
  try {
    let ItineraryInfo = req.body;
    let all = await Itinerary.create(ItineraryInfo);
    return res.status(200).json({
      response: all,
    });
  } catch (error) {
    next(error)
  }
}

export default createItinerary
