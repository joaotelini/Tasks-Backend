import express from "express";
import cors from "cors";
import "dotenv/config";
import taskRouter from "./routes/taskRoutes.js";
import authRouter from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 3333;
const app = express();
const allowOrigins = [
  "http://localhost:3000",
  "https://todolist-telini.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {

      if (!origin || allowOrigins.indexOf(origin) !== -1) {
        console.log("✅ Origin permitida!");
        callback(null, true);
      } else {
        console.log("❌ Origin NÃO permitida!");
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

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
  console.log(`🚀 Server is running on http://localhost:${port}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
});
