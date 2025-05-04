import User from "../../models/User.js"

let allUsers = async (req, res, next) => {
  try {
    let allUsers = await User.find()
    return res.status(200).json({
      response: allUsers,
    })
  } catch (error) {
    next(error)
  }
}

const validateToken = async (req, res, next) => {
  try {
    // El usuario autenticado está en req.user, no en res.user
    return res.status(200).json({
      success: true,
      response: {
        email: req.user.email,
        role: req.user.role,
        photo: req.user.photo}
    });
  } catch (error) {
    next(error);
  }
}

export { allUsers, validateToken }
