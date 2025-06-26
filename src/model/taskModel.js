import { getDataBase } from "../config/mongoConnection.js";
import { ObjectId } from "mongodb";

export const getAllTasks = async (userId) => {
  const db = getDataBase();

  return await db
    .collection("tasks")
    .find({ user_id: new ObjectId(String(userId)) })
    .toArray();
};

export const editStatusTask = async (id, userId, status) => {
  const db = getDataBase();
  const collection = db.collection("tasks");

  const filter = {
    _id: new ObjectId(String(id)),
    user_id: new ObjectId(String(userId)),
  };

  const updateStatus = {
    $set: { status },
  };

  const result = await collection.updateOne(filter, updateStatus);

  return result;
};

export const createTask = async (title, userId) => {
  const db = getDataBase();
  const doc = {
    title,
    user_id: new ObjectId(String(userId)),
    status: false,
  };

  const result = await db.collection("tasks").insertOne(doc);

  return result.insertedId;
};

export const deleteTask = async (id, userId) => {
  const db = getDataBase();
  const result = await db
    .collection("tasks")
    .deleteOne({
      _id: new ObjectId(String(id)),
      user_id: new ObjectId(String(userId)),
    });

  return result.deletedCount;
};
