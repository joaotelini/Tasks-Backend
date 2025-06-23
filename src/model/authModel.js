import { getDataBase } from "../config/mongoConnection.js";
import { ObjectId } from "mongodb";

export const loginAuth = async (email) => {
  const db = getDataBase();
  const user = await db.collection("users").findOne({ email });
  return user;
};

export const registerAuth = async (fullname, email, password) => {
  const db = getDataBase();
  const user = await db
    .collection("users")
    .insertOne({ fullname, email, password });
  return user;
};

export const getUsersModel = async () => {
  const db = getDataBase();
  const users = await db.collection("users").find().toArray();
  return users;
};

export const getUserIdModel = async (id) => {
  const db = getDataBase();
  const user = await db
    .collection("users")
    .findOne({ _id: new ObjectId(String(id)) });
  return user;
};
