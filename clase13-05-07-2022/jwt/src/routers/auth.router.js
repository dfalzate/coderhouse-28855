import express from "express";
import * as AuthController from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/", AuthController.login);

export default router;
