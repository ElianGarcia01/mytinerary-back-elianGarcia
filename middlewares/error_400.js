const error_400 = (error, req, res, next) => {
  if (error.status === 400) {
    return res.status(400).json({
      succes: false,
      message: "error",
      response: error
    })
  }

  next(error)
}

export default error_400
