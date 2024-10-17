import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    caption: { type: String, required: true },
    image: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    about: { type: String, default: "" },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
