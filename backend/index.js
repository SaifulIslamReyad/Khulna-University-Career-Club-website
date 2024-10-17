import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db.js";
import cookieParser from "cookie-parser";
dotenv.config({});

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

app.listen(PORT, () => {
  connectDB(MONGO_URL);
  console.log("Server list at port : ", PORT);
});
