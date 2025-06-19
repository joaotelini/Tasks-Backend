import connection from "../config/connection.js";

export const getAllTask = async () => {
  const [result] = await connection.execute(
    "SELECT id, title, status FROM task"
  );
  return result;
};

export const editStatusTask = async (id, status) => {
  const [result] = await connection.execute(
    "UPDATE task SET status = ? WHERE id = ?",
    [status, id]
  );
  return { id: Number(id), status, affectedRows: result.affectedRows };
};

export const newTask = async (title) => {
  const [result] = await connection.execute(
    "INSERT INTO task (title, status) VALUES (?, false)",
    [title]
  );
  return { id: result.insertId, title, status: false };
};

export const deleteTask = async (id) => {
  const [result] = await connection.execute("DELETE FROM task WHERE id = ?", [
    id,
  ]);
  return result;
};
