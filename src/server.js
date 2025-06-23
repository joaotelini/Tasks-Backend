import express from "express";
import cors from "cors";
import "dotenv/config";
import taskRouter from "./routes/taskRoutes.js";
import authRouter from "./routes/authRoutes.js";

const port = process.env.PORT || 3333;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/tasks", taskRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "API is running",
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
