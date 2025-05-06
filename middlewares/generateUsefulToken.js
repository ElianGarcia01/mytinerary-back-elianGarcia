import jwt from "jsonwebtoken";

const generateUsefulToken = (user) => {
  return jwt.sign(
    { email: user.email, id: user._id },
    process.env.SECRET,
    { expiresIn: "1h" }
  );
};

export default generateUsefulToken;
