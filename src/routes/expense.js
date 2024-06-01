import { Router } from "express";
import expenseController from "../controllers/expense.js";
import authenticateJWT from "../middlewares/middleware.js";

const expenseRouter = Router();

expenseRouter.post("/add", authenticateJWT, (req, res) => {
  expenseController.createExpense(req, res);
});

expenseRouter.get("/fetch", authenticateJWT, (req, res) => {
  expenseController.fetchExpenses(req, res);
});
expenseRouter.delete("/:expenseId", authenticateJWT, (req, res) => {
  expenseController.deleteExpense(req, res);
});

export default expenseRouter;
