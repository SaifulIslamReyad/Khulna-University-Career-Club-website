import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("DATABASE Connected Successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
