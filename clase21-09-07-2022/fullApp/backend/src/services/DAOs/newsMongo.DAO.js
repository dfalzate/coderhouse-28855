import { NewsBase } from "./newsBase.DAO.js";
import { NewsModel } from "../../models/news.model.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export class NewsMongo extends NewsBase {
  static init() {
    mongoose.connect(process.env.MONGO_URI, (err) => {
      if (err) {
        console.log("Error:", err);
      } else {
        console.log("🔥 Conectado a la base de datos");
      }
    });
  }

  async getAllNews() {
    try {
      const response = await NewsModel.find();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async createNews(news) {
    try {
      const response = await NewsModel.create(news);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
