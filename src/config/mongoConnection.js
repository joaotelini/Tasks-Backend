import { MongoClient } from "mongodb";
import "dotenv/config";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export const connectMongo = async () => {
  try {
    await client.connect();
    console.log("✅ Conectado ao MongoDB Atlas com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar ou buscar dados:", error);
  }
};

export const getDataBase = () => {
  console.log("📄 Documentos encontrados:");

  return client.db("todoList");
};
