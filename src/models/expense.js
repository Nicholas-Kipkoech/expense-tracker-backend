import mongoose from "mongoose";

const expenseSchema = mongoose.Schema(
  {
    expenseName: { type: String },
    expenseAmount: { type: String },
    createdBy: { type: String },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;
