import Earning from "../models/earnings.js";

class EarningController {
  async addEarning(req, res) {
    try {
      const { earningAmount } = req.body;
      const user = req.user;
      const newEarning = new Earning({
        earningAmount,
        createdBy: user._id,
      });
      await newEarning.save();
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
      const earning = await Earning.findOne({ createdBy: user._id });
      return res.status(200).json({ earning });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}

const earningController = new EarningController();
export default earningController;
