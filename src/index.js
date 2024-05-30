import express from "express";
import { connectToDatabase } from "./config/db-config.js";

const app = express();

connectToDatabase();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Api is live" });
});

app.listen(5000, () => console.log("server started"));
