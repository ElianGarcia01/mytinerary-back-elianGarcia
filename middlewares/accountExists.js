import User from "../models/User.js"

export default async (req, res, next) => {
  try {
    const {email} = req.body
    let account = await User.findOne({ email })

    if (account) {
      return res.status(400).json({
        succes: false,
        message: "User alredy exists"
      })
    }
    next()
  } catch (error) {
    next(error)
  }
}
