import express from "express";
import {
  getTasks,
  createTask,
  deleteTaskbyId,
  editStatusTaskController,
} from "../controller/taskController.js";

import {
  sendTaskMiddleware,
  editTaskMiddleware,
  verifyIdMiddleware,
} from "../middleware/taskMiddleware.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", sendTaskMiddleware, createTask);
router.put(
  "/:id",
  verifyIdMiddleware,
  editTaskMiddleware,
  editStatusTaskController
);
router.delete("/:id", verifyIdMiddleware, deleteTaskbyId);

export default router;
