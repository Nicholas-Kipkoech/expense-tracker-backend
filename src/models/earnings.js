import mongoose from "mongoose";

const earningSchema = new mongoose.Schema(
  {
    earningAmount: { type: Number, default: 0 },
    createdBy: { type: String },
  },
  { timestamps: true }
);

const Earning = mongoose.model("Earning", earningSchema);
export default Earning;
