import { Router } from "express";
import authenticateJWT from "../middlewares/middleware.js";
import { ExpenseController } from "../controllers/expense.js";

const expenseRouter = Router();

expenseRouter.post("/add", authenticateJWT, (req, res) => {
  ExpenseController.createExpense(req, res);
});

expenseRouter.get("/fetch", authenticateJWT, (req, res) => {
  ExpenseController.createExpense(req, res);
});
expenseRouter.delete("/:expenseId", authenticateJWT, (req, res) => {
  ExpenseController.createExpense(req, res);
});

export default expenseRouter;
