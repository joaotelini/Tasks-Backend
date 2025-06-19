import {
  getAllTask,
  newTask,
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

export async function createTask(req, res) {
  try {
    const { title } = req.body;
    const task = await newTask(title);
    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
    res.status(500).json({ message: error.message });
  }
}

export async function editStatusTaskController(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const task = await editStatusTask(id, status);

    if (task.affectedRows === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Status updated successfully", task });
  } catch (error) {
    console.error("Erro ao editar status da tarefa:", error);
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
