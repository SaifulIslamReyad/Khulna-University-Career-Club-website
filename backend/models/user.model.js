import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    studentID: { type: Number, required: true, unique: true },
    profilePictue: { type: String, default: "" },
    discipline: { type: String, required: true },
    mobile: { type: Number, required: true },
    hometown: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"] },
    cv: { type: String, default: "" },
    skills: { type: String, default: "" },
    expectation: { type: String, default: "" },
    hire: { type: String, default: "" },
  },
  { timestamps: true }
);
