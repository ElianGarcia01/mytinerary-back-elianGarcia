import Itinerary from "../../models/Itinerary.js";

let updateItinerary = async (req, res, next) => {
  try {
    let ItineraryInfo = req.body;
    let updateItinerary = await Itinerary.updateOne(
      { title: ItineraryInfo.title }, // Condiciones de busqueda
      { price: ItineraryInfo.price } // Modificaciones
    );

    return res.status(200).json({
      response: updateItinerary,
    });
  } catch (error) {
    next(error);
  }
};

export default updateItinerary;
