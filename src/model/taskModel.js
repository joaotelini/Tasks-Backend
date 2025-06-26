import { getDataBase } from "../config/mongoConnection.js";
import { ObjectId } from "mongodb";

export const getAllTasks = async () => {
  const db = getDataBase();

  return await db.collection("tasks").find().toArray();
};

export const editStatusTask = async (id, status) => {
  const db = getDataBase();
  const collection = db.collection("tasks");
  const filter = { _id: new ObjectId(String(id)) };
  const updateStatus = { $set: { status } };
  const result = await collection.updateOne(filter, updateStatus);

  return result;
};

export const createTask = async (title) => {
  const db = getDataBase();
  const doc = {
    title,
    status: false,
  };

  const result = await db.collection("tasks").insertOne(doc);

  return result.insertedId;
};

export const deleteTask = async (id) => {
  const db = getDataBase();
  const result = await db
    .collection("tasks")
    .deleteOne({ _id: new ObjectId(String(id)) });

  return result.deletedCount;
};
