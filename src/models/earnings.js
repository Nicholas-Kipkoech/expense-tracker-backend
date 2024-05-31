import mongoose from "mongoose";

const earningSchema = mongoose.Schema(
  {
    earningAmount: { type: Number },
    createdBy: { type: String },
  },
  { timestamps: true }
);

const Earning = mongoose.model("Earning", earningSchema);
export default Earning;
