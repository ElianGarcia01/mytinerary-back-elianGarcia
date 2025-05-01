import User from "../../models/User.js"

let signUp = async (req, res, next) => {
    try {
        let UserInfo = req.body
        let createUser = await User.create(UserInfo)
        return res.status(201).json({
            response: createUser
        }) 
    } catch (error) {
        next(error)
    }
}
export default signUp