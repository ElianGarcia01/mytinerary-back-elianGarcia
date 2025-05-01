import bcrypt from "bcryptjs"

export default (req, res, next) => {
  let password = req.body.password;
  let hasPass = bcrypt.hashSync(password, 10)
  req.body.password = hasPass
  next()
}
