const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        succes: false,
        message: `Petición con el método: ${req.method} con la ruta: ${req.url} no fue encontrada`
    })
}

export default not_found_handler