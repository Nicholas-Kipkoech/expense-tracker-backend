import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwt_secret = process.env.JWT_SECRET;

const createToken = (payload) => {
  const token = jwt.sign({ payload }, jwt_secret, {
    expiresIn: "24h",
  });
  return token;
};

export default createToken;
