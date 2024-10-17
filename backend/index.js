import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
dotenv.config({});

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.get("/", (_, res) => {
  return res.status(200).json({
    message: "I am coming from backend",
    success: true,
  });
});

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

//api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);

//server listen port
app.listen(PORT, () => {
  connectDB(MONGO_URL);
  console.log("Server list at port : ", PORT);
});
