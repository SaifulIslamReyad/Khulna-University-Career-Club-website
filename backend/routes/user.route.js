import express from "express";
import { login, logout, register } from "../controllers/user.controller.js";
import upload from "../utils/multer.js";
const router = express.Router();
router.post("/register", upload.single("cv"), register);
router.post("/login", login);
router.get("/logout", logout);

export default router;
