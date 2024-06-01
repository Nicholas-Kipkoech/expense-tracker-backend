import Earning from "../models/earnings.js";

class EarningController {
  async addEarning(req, res) {
    try {
      const { additionalAmount } = req.body;
      const user = req.user;
      const earning = await Earning.findOne({ createdBy: user.payload._id });
      earning.earningAmount += additionalAmount;
      await earning.save();
      return res
        .status(200)
        .json({ success: true, message: "Principal amount added!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }

  async getEarning(req, res) {
    try {
      const user = req.user;
      const earning = await Earning.findOne({ createdBy: user.payload._id });
      if (earning) {
        return res.status(200).json({ earning });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}

const earningController = new EarningController();
export default earningController;
