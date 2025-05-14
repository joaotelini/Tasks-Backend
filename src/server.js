import express from "express";
import cors from "cors";
import "dotenv/config";
import taskRouter from "./routes/taskRoutes.js";

const port = process.env.PORT || 3333;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
