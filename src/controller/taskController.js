import {
  createTask,
  deleteTask,
  editStatusTask,
  getAllTasks,
} from "../model/taskModel.js";

export async function getTasksController(req, res) {
  try {
    const task = await getAllTasks();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createTaskController(req, res) {
  try {
    const { title } = req.body;
    const task = await createTask(title);
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
      return res.status(404).json({ message: "Task não encontrada" });
    }

    res.status(200).json({ message: "Status atualizado com sucesso", task });
  } catch (error) {
    console.error("Erro ao editar status da tarefa:", error);
    res.status(500).json({ message: error.message });
  }
}

export async function deleteTaskController(req, res) {
  try {
    const taskDeleted = await deleteTask(req.params.id);
    if (taskDeleted === 0) {
      return res.status(400).json({ message: "Task not exist" });
    }
    res.status(200).json({ message: "Task deleted successfully", taskDeleted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
