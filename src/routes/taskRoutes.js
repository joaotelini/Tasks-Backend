import express from "express";
import {
  getTasksController,
  createTaskController,
  deleteTaskController,
  editStatusTaskController,
} from "../controller/taskController.js";

import {
  sendTaskMiddleware,
  editTaskMiddleware,
  verifyIdMiddleware,
} from "../middleware/taskMiddleware.js";
import { jwtMiddleware } from "../middleware/jwtMiddleware.js";

const router = express.Router();

router.get("/", jwtMiddleware, getTasksController);
router.post("/", jwtMiddleware, sendTaskMiddleware, createTaskController);
router.patch(
  "/:id",
  jwtMiddleware,
  verifyIdMiddleware,
  editTaskMiddleware,
  editStatusTaskController
);
router.delete("/:id", jwtMiddleware, verifyIdMiddleware, deleteTaskController);

export default router;
