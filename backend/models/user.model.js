import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    studentID: { type: Number, required: true, unique: true },
    profilePictue: { type: String, default: "" },
    discipline: { type: String, required: true },
    mobile: { type: String, required: true },
    hometown: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"] },
    cv: { type: String, default: "" },
    skills: { type: String, default: "" },
    expectation: { type: String, default: "" },
    hire: { type: String, default: "" },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
