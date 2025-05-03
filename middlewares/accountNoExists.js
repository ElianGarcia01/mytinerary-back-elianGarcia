import User from "../models/User.js"

export default async (req, res, next) => {
  try {
    const { email } = req.body
    let account = await User.findOne({ email })
    if (account) {
      req.user = {
        email: account.email,
        password: account.password,
        position: account.position
      }
      return next()
    }
    return res.status(400).json({
      success: false,
      message: "User does not exist"
    })
  } catch (error) {
    next(error)
  }
}
