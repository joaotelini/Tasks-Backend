import express from "express";
import {
  getTasks,
  createTask,
  editSTask,
  deleteTaskbyId,
} from "../controller/taskController.js";

import {
  sendTaskMiddleware,
  verifyIdMiddleware,
  editTaskMiddleware,
} from "../middleware/taskMiddleware.js";

const router = express.Router();

router.get("/", getTasks);
router.put("/:id", verifyIdMiddleware, editTaskMiddleware, editSTask);
router.post("/", sendTaskMiddleware, createTask);
router.delete("/:id", verifyIdMiddleware, deleteTaskbyId);

export default router;
