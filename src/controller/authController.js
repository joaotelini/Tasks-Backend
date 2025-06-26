import {
  loginAuth,
  registerAuth,
  getUsersModel,
  getUserIdModel,
} from "../model/authModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";

const secret = process.env.SECRET;

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginAuth(email);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id.toString() }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "success",
      token,
      user: user._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const registerUserController = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await registerAuth(fullname, email, password);
    res.status(201).json({
      status: "success",
      user: { _id: user.insertedId.toString(), fullname, email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsersController = async (req, res) => {
  try {
    const users = await getUsersModel();

    // Retorna todos os usuários, sem senha
    const safeUsers = users.map(({ _id, fullname, email }) => ({
      _id: _id.toString(),
      fullname,
      email,
    }));

    res.status(200).json({
      status: "success",
      users: safeUsers,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserIdModel(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { _id, fullname, email } = user;

    res.status(200).json({
      status: "success",
      user: { _id: _id.toString(), fullname, email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
