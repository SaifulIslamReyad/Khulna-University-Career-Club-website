// import sharp from "sharp";
// import cloudinary from "../utils/cloudinary.js";
// import { Post } from "../models/post.model.js";
// import { User } from "../models/user.model.js";

// export const addNewPost = async (req, res) => {
//   try {
//     const { caption, about } = req.body;
//     const image = req.file;
//     const authorID = req.id;

//     if (!caption || !image) {
//       return res.status(401).json({
//         message: "Caption and image are required",
//         success: false,
//       });
//     }

//     const optimizedImageBuffer = await sharp(image.buffer)
//       .resize({ width: 400, height: 400, fit: "inside" })
//       .jpeg({ quality: 80 })
//       .toBuffer();

//     const cloudResponse = await cloudinary.uploader.upload(
//       `data:image/jpeg;base64,${optimizedImageBuffer.toString("base64")}`
//     );

//     if (!cloudResponse) {
//       return res.status(500).json({
//         message: "Image upload failed",
//         success: false,
//       });
//     }

//     const post = await Post.create({
//       caption,
//       image: cloudResponse.secure_url,
//       author: authorID,
//       about,
//     });

//     const user = await User.findById(authorID);
//     if (user) {
//       user.posts.push(post._id);
//       await user.save();
//     }

//     await post.populate({ path: "author", select: "-password" }).execPopulate();

//     return res.status(200).json({
//       message: "New post added",
//       success: true,
//       post,
//     });
//   } catch (error) {
//     console.error("Add Post error:", error);
//     return res.status(500).json({
//       message: "An error occurred while adding the post",
//       success: false,
//       error: error.message,
//     });
//   }
// };

// export const getAllPost = async (req, res) => {
//   try {
//     const posts = await Post.find()
//       .sort({ createdAt: -1 })
//       .populate({ path: "author", select: "name profilePicture" });

//     if (!posts.length) {
//       return res.status(404).json({
//         message: "No posts found",
//         success: false,
//       });
//     }

//     return res.status(200).json({
//       posts,
//       success: true,
//     });
//   } catch (error) {
//     console.error("All Post Error:", error);
//     return res.status(500).json({
//       message: "Internal server error",
//       success: false,
//       error: error.message,
//     });
//   }
// };

// export const deletePost = async (req, res) => {
//   try {
//     const postID = req.params.id;
//     const authorID = req.id;

//     const post = await Post.findById(postID);
//     if (!post) {
//       return res.status(404).json({
//         message: "Post not found",
//         success: false,
//       });
//     }

//     if (post.author.toString() !== authorID) {
//       return res.status(403).json({
//         message: "You are not the author of this post",
//         success: false,
//       });
//     }

//     await Post.findByIdAndDelete(postID);

//     const user = await User.findById(authorID);
//     user.posts = user.posts.filter((id) => id.toString() !== postID.toString());
//     await user.save();

//     return res.status(200).json({
//       message: "Post deleted",
//       success: true,
//     });
//   } catch (error) {
//     console.error("Delete Post error:", error);
//     return res.status(500).json({
//       message: "Internal server error",
//       success: false,
//       error: error.message,
//     });
//   }
// };
