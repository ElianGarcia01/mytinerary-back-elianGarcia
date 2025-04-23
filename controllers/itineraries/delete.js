import Itinerary from "../../models/Itinerary.js";

let deleteItinerary = async (req, res, next) => {
  try {
    let ItineraryInfo = req.body;
    let deleteItinerary = await Itinerary.deleteOne(
      { title: ItineraryInfo.title } // Condiciones de busqueda
    );

    return res.status(200).json({
      response: deleteItinerary,
    });
  } catch (error) {
    next(error);
  }
};

export default deleteItinerary;
