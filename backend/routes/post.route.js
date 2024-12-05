import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../middlewares/multer.js";
import {
  addNewPost,
  deletePost,
  getAllPost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/add", isAuthenticated, upload.single("image"), addNewPost);
router.get("/all", isAuthenticated, getAllPost);
router.delete("/delete/:id", isAuthenticated, deletePost);

export default router;
