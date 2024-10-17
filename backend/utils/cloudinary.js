import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config({});

if (
  !process.env.API_KEY ||
  !process.env.API_SECRET ||
  !process.env.CLOUD_NAME
) {
  console.error("process error ,environment variable missing");
  process.exit(1);
}
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default cloudinary;
