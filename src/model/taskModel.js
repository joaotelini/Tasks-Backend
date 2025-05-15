import connection from "../config/connection.js";

export const getAllTask = async () => {
  const [result] = await connection.execute("SELECT * FROM task");
  return result;
};

export const newTask = async (title, description) => {
  const [result] = await connection.execute(
    'INSERT INTO task (title, description, status, created_at) VALUES (?,?,"pending", NOW())',
    [title, description]
  );
  return result;
};

export const editStatusTask = async (id, status) => {
  const [result] = await connection.execute(
    "UPDATE task SET status = ? WHERE id = ?",
    [status, id]
  );
  return result;
};

export const deleteTask = async (id) => {
  const [result] = await connection.execute("DELETE FROM task WHERE id = ?", [
    id,
  ]);
  return result;
};
