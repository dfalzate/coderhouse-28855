import express from "express";
import * as newsController from "../controllers/news.controller.js";

const router = express.Router();

router.get("/", newsController.getAllNews);
router.get("/:id", newsController.getNews);
router.post("/", newsController.createNews);

export default router;
