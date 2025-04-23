import Itinerary from "../../models/Itinerary.js";
import City from "../../models/City.js";

let allItineraries = async (req, res, next) => {
  try {
    let all = await Itinerary.find().populate("city", "name_city").exec();

    return res.status(200).json({
      response: all,
    });
  } catch (error) {
    next(error);
  }
};

let itineraryByCity = async (req, res, next) => {
  try {
    let cityName = req.params.nameItinerary;

    const city = await City.findOne({ name_city: cityName });

    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    // Buscar itinerarios relacionados con la ciudad
    const itineraries = await Itinerary.find({ city: city._id })
      .populate("city", "name_city")
      .exec();

    return res.status(200).json({
      response: itineraries,
    });
  } catch (error) {
    next(error);
  }
};

let itineraryById = async (req, res, next) => {
  try {
    let itineraryId = req.params.nameId;

    let ItineraryFound = await Itinerary.findById(itineraryId);

    return res.status(200).json({
      response: ItineraryFound,
    });
  } catch (error) {
    next(error);
  }
}

export { allItineraries, itineraryByCity, itineraryById };
