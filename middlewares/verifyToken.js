import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).json({ message: "No token provided" })

    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token, process.env.SECRET)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" })
  }
}

export default verifyToken
