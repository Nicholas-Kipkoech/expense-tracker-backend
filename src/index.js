import express from "express";
import { connectToDatabase } from "./config/db-config.js";

const app = express();

connectToDatabase();

app.listen(5000, () => console.log("server started"));
