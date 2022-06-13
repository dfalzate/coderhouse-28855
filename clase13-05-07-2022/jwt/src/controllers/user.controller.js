import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";

export async function createUser(req, res) {
  const { body } = req;
  const password = jwt.sign({ password: body.password }, process.env.PRIVATE_KEY);
  body.password = password;
  try {
    const response = await UserModel.create(body);
    res.status(200).json({ user: response });
  } catch (error) {
    console.log(error);
  }
}
