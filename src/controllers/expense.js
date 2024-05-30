import Expense from "../models/expense.js";

class ExpenseController {
  async createExpense(req, res) {
    try {
      const { expenseName, expenseAmount, createdBy } = req.body;
      const user = req.user;

      const newExpense = new Expense({
        expenseName,
        expenseAmount,
        createdBy: user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }

  async fetchExpenses(req, res) {
    try {
      const user = req.user;
      const expenses = await Expense.find({ createdBy: user });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}

const expenseController = new ExpenseController();

export default expenseController;
