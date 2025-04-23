import City from "../../models/City.js"

let update = async (req, res, next) => {
    try {
        let cityInfo = req.body
        let updateCity = await City.updateOne(
            {name: cityInfo.name_city}, // Condiciones de busqueda
            {itinerarie: cityInfo.itinerarie}, // Modificaciones
        )

        return res.status(200).json({
            response: updateCity
        })
        
    } catch (error) {
        next(error)
    }
}

export default update