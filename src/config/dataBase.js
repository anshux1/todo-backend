import mongoose from "mongoose";
import { DB_URL } from "../config/config.js";

export const connectDB = () => {
  mongoose
    .connect(DB_URL)
    .then(() => console.log("Database successfully connected..."))
    .catch((err) => {
      console.log("Issue in DB connectiom...");
      console.error(err.message);
      process.exit(1);
    });
};
