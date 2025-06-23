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

const router = express.Router();

router.get("/", getTasksController);
router.post("/", sendTaskMiddleware, createTaskController);
router.patch(
  "/:id",
  verifyIdMiddleware,
  editTaskMiddleware,
  editStatusTaskController
);
router.delete("/:id", verifyIdMiddleware, deleteTaskController);

export default router;
