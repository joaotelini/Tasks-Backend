import express from "express";
import cors from "cors";
import "dotenv/config";
import taskRouter from "./routes/taskRoutes.js";
import { connectMongo } from "./config/taskConnection.js";

const port = process.env.PORT || 3333;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

connectMongo().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
