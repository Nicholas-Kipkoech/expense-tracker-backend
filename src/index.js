import express from "express";
import { connectToDatabase } from "./config/db-config.js";
import useRouter from "./routes/user.js";
import expenseRouter from "./routes/expense.js";
import earningRouter from "./routes/earning.js";
import cors from "cors";
import User from "./models/user.js";
import { sendTotalExpenseToday } from "./utils/sendMailer.js";
import Expense from "./models/expense.js";
import cron from "node-cron";
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Api is live" });
});

async function sendEmails() {
  const users = await User.find({});
  for (let i = 0; i < users.length; i++) {
    const expense = await Expense.findOne({ createdBy: users[i]._id });
    if (users) {
      await sendTotalExpenseToday(
        "Your Expense",
        users[i].email,
        expense.expenseAmount
      );
    }
  }
}

cron.schedule("0 19  * * *", async () => {
  console.log("Running the cron job at 7:00 PM");
  // Your task code here
  // Example: Call a function or execute a script
  await sendEmails();
});

app.use("/api/user", useRouter);
app.use("/api/expenses", expenseRouter);
app.use("/api/earnings", earningRouter);

app.listen(5000, () => console.log("server started on port 5000"));
