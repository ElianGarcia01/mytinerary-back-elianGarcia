import City from "../../models/City.js";

let allCities = async (req, res, next) => {
  try {
    let all = await City.find();
    return res.status(200).json({
      response: all,
    });
  } catch (error) {
    next(error)
  }
};

let cityById = async (req, res, next) => {
  try {
    let nameId = req.params.nameId
    console.log(nameId);

    let all = await City.findById(nameId);
    return res.status(200).json({
      response: all,
    });
  } catch (error) {
    next(error)
  }
}

export { allCities, cityById }
