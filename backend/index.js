import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
// import postRoute from "./routes/post.route.js";
import db from "./database/db.js";
dotenv.config({});

db();
const PORT = process.env.PORT;
const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//api
app.use("/api/v1/user", userRoute);
// app.use("/api/v1/post", postRoute);

//server listen port
app.listen(PORT, () => {
  console.log("Server list at port : ", PORT);
});
