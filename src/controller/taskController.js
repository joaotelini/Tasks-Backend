import {
  createTask,
  deleteTask,
  editStatusTask,
  getAllTasks,
} from "../model/taskModel.js";

export async function getTasksController(req, res) {
  try {
    const userId = req.userId;
    const tasks = await getAllTasks(userId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createTaskController(req, res) {
  try {
    const { title } = req.body;
    const userId = req.userId;

    const taskId = await createTask(title, userId);
    res.status(201).json({ message: "Task created successfully", taskId });
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
    res.status(500).json({ message: error.message });
  }
}

export async function editStatusTaskController(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const userId = req.userId;

    const task = await editStatusTask(id, userId, status);

    if (task.matchedCount === 0) {
      return res
        .status(404)
        .json({ message: "Task not found or does not belong to user" });
    }

    res.status(200).json({ message: "Task status edited successfully", task });
  } catch (error) {
    console.error("Erro ao editar status da tarefa:", error);
    res.status(500).json({ message: error.message });
  }
}

export async function deleteTaskController(req, res) {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const taskDeleted = await deleteTask(id, userId);

    if (taskDeleted === 0) {
      return res
        .status(404)
        .json({ message: "Task not found or does not belong to user" });
    }

    res.status(200).json({ message: "Task deleted successfully", taskDeleted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
