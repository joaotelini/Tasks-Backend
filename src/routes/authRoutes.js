import express from "express";
import {
  loginUserController,
  registerUserController,
  getUserController,
  getUsersController,
} from "../controller/authController.js";

import {
  loginMiddleware,
  registerMiddleware,
} from "../middleware/authMiddleware.js";
import { jwtMiddleware } from "../middleware/jwtMiddleware.js";

const router = express.Router();

router.post("/register", registerMiddleware, registerUserController);
router.post("/login", loginMiddleware, loginUserController);
router.get("/users", jwtMiddleware, getUsersController);
router.get("/users/:id", jwtMiddleware, getUserController);

export default router;
