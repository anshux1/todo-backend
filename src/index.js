import express from "express";
import { PORT } from "./config/config.js";
import todoRouter from "./routes/todo.js";
import { connectDB }  from "./config/dataBase.js";
const app = express();

app.use(express.json())

connectDB();

app.use('/api/v1', todoRouter)

app.listen(PORT, () => {
  console.log(`Server is started at ${PORT}`);
});
