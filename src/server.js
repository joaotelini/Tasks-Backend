import express from "express";
import "dotenv/config";
import taskRouter from "./routes/taskRoutes.js";
import authRouter from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 3333;
const app = express();

app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "https://todolist-telini.vercel.app",
  ];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.use(express.json());
app.use(cookieParser());

app.use("/tasks", taskRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "API is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

app.listen(port, () => {
  console.log(`🚀 API is running`);
});
