import { MongoClient } from "mongodb";
import "dotenv/config";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export const connectMongo = async () => {
  try {
    await client.connect();
  } catch (error) {
    console.error("❌ Erro ao conectar ou buscar dados:", error);
  }
};

export const getDataBase = () => {
  return client.db("todoList");
};
