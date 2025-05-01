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

export { allUsers }
