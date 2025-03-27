import City from "../../models/City.js";

let createCity = async (req, res, next) => {
  try {
    let newCity = req.body;
    console.log(newCity);

    let all = await City.create(newCity);
    return res.status(200).json({
      response: all,
    });
  } catch (error) {
    next(error)
  }
};

let createCities = async (req, res, next) => {
  try {
    let newCities = req.body;
    console.log(newCities);

    let all = await City.insertMany(newCities);
    return res.status(200).json({
      response: all,
    });
  } catch (error) {
    next(error)
  }
};

export {createCity , createCities}
