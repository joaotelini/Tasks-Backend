import {
  getAllTask,
  newTask,
  getTaskById,
  editStatusTask,
  deleteTask,
} from "../model/taskModel.js";

export async function getTasks(req, res) {
  try {
    const task = await getAllTask();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getTaskId(req, res) {
  try {
    const task = await getTaskById(req.params.id);
    if (task.length === 0) {
      return res.status(400).json({ message: "Task not exist" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createTask(req, res) {
  try {
    await newTask(req.body.name, req.body.status);
    res.status(201).json({ message: "Task created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function editSTask(req, res) {
  try {
    const task = await editStatusTask(req.params.id, req.body.status);

    if (task.affectedRows === 0) {
      return res.status(400).json({ message: "Task not exist" });
    }

    res.status(200).json({ message: "Status updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteTaskbyId(req, res) {
  try {
    const task = await deleteTask(req.params.id);
    if (task.affectedRows === 0) {
      return res.status(400).json({ message: "Task not exist" });
    }
    res.status(200).json({ message: "Task deleted successfully", task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
