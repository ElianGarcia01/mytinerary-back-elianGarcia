import User from "../../models/User.js"

const signOut = async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
      { email: req.user.email },
      { online: false }
    )
    return res.status(200).json({
      success: true,
      message: "Signed out"
    })
  } catch (error) {
    next(error)
  }
}

export default signOut
