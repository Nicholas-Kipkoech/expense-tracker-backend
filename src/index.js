import express from "express";
import { connectToDatabase } from "./config/db-config.js";
import useRouter from "./routes/user.js";
import expenseRouter from "./routes/expense.js";
import earningRouter from "./routes/earning.js";
import cors from "cors";
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Api is live" });
});

app.use("/api/user", useRouter);
app.use("/api/expenses", expenseRouter);
app.use("/api/earnings", earningRouter);

app.listen(5000, () => console.log("server started on port 5000"));
