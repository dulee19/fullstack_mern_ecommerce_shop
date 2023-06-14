import jwt from "jsonwebtoken";

const generateToken = id => {
  // this is going to take and user ID, we want to add this as a payload in this token
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d"
  });
};

export default generateToken;
