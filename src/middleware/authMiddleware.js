import bcrypt from "bcrypt";
import { getDataBase } from "../config/mongoConnection.js";
import "dotenv/config";

export const loginMiddleware = async (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ message: "Request body is missing" });
  }
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: "Email and password are required" });
  }

  try {
    const db = getDataBase();
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Email not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const registerMiddleware = async (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ message: "Request body is missing" });
  }
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res
      .status(400)
      .json({ message: "Fullname, email and password are required" });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({
      message: "Email is not valid",
    });
  }

  try {
    const db = getDataBase();
    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const saltRounds = Number(process.env.SALTROUNDS);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    req.body.password = hashedPassword;

    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
