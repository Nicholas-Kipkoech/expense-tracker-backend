import Expense from "../models/expense.js";

class ExpenseController {
  async createExpense(req, res) {
    try {
      const { expenseName, expenseAmount, expenseType } = req.body;
      const user = req.user;

      const newExpense = new Expense({
        expenseName,
        expenseAmount,
        expenseType,
        createdBy: user.payload._id,
      });
      await newExpense.save();
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
      const expenses = await Expense.find({ createdBy: user.payload._id });
      const filteredExpenses = expenses.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return res.status(200).json({ expenses: filteredExpenses });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
  async deleteExpense(req, res) {
    try {
      const { expenseId } = req.params;
      await Expense.findOneAndDelete({ _id: expenseId });
      return res
        .status(200)
        .json({ success: true, message: "Expense deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}

const expenseController = new ExpenseController();

export default expenseController;
