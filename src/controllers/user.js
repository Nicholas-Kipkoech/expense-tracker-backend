import Earning from "../models/earnings.js";
import User from "../models/user.js";
import bcrypt from "../utils/bcrypt.js";
import createToken from "../utils/jwt.js";

class UserController {
  async createUser(req, res) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists!" });
      }
      const hashPass = await bcrypt.encrypt(password);
      const newUser = await User.create({
        firstName,
        email,
        lastName,
        password: hashPass,
      });
      await newUser.save();
      if (newUser) {
        const earning = await Earning.create({
          earningAmount: 0,
          createdBy: newUser._id,
        });
        await earning.save();
        return res.status(200).json({
          success: true,
          message: "User created succesfully",
          user: newUser,
        });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async userLogin(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).json({ error: `${email} does not exist!` });
      }
      const isValidPass = await bcrypt.compare(password, user.password);
      if (!isValidPass) {
        return res.status(401).json({ error: "Invalid password!" });
      }
      const token = createToken(user);
      return res.status(200).json({
        success: true,
        message: "Logged in successfully",
        accessToken: token,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}

const userController = new UserController();
export default userController;
