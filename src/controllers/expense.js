import Earning from "../models/earnings.js";
import Expense from "../models/expense.js";

class ExpenseController {
  async createExpense(req, res) {
    try {
      const { expenseName, expenseAmount } = req.body;
      const user = req.user;

      const newExpense = new Expense({
        expenseName,
        expenseAmount,
        createdBy: user._id,
      });
      await newExpense.save();
      const earning = await Earning.findOne({ createdBy: user._id });
      if (!earning) {
        return res.status(404).json({
          success: false,
          message: "Earning record not found for the user.",
        });
      }
      earning.earningAmount -= expenseAmount;
      await earning.save();
      return res
        .status(200)
        .json({ success: true, message: "expense added success fully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }

  async fetchExpenses(req, res) {
    try {
      const user = req.user;
      console.log(user);
      const expenses = await Expense.find({ createdBy: user._id });
      return res.status(200).json({ expenses });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}

const expenseController = new ExpenseController();

export default expenseController;
