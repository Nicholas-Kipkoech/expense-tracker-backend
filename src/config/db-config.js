import mongoose from "mongoose";
import { config } from "dotenv";
config();
const url = process.env.MONGO_URL;

export async function connectToDatabase() {
  try {
    await mongoose.connect(url);
    console.log("connected to database");
  } catch (error) {
    console.error(error);
  }
}
