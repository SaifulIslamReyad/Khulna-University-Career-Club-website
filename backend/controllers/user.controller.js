import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      confirmPassword,
      studentID,
      discipline,
      mobile,
      hometown,
    } = req.body;
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !studentID ||
      !discipline ||
      !mobile ||
      !hometown
    ) {
      return res.status(400).json({
        message:
          "name, email, password, confirmPassword, studentID, discipline, mobile, and hometown are required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "Email already in use, please try a different one",
        success: false,
      });
    }
    if (password !== confirmPassword) {
      return res.status(402).json({
        message: "Password does not match",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      studentID,
      discipline,
      mobile,
      hometown,
    });
    return res.status(201).json({
      message: "Successfully registered",
      success: true,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      message: "Registration failed. An error occurred",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "Email and password are required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const token = jwt.sign({ userID: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      studentID: user.studentID,
      profilePicture: user.profilePicture,
      discipline: user.discipline,
      mobile: user.mobile,
      hometown: user.hometown,
      gender: user.gender,
      cv: user.cv,
      skills: user.skills,
      expectation: user.expectation,
      hire: user.hire,
      posts: user.posts,
    };
    return res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        message: `Welcome ${user.name}`,
        success: true,
        user: userResponse,
      });
  } catch (error) {
    console.error("Log in error", error);
    return res.status(500).json({
      message: "An error occurred during login",
      success: false,
    });
  }
};

export const logout = async (_, res) => {
  try {
    return res.cookie("token", "", { maxAge: 0 }).json({
      message: "Logout successfully",
      success: true,
    });
  } catch (error) {
    console.error("Log out error:", error);
    return res.status(500).json({
      message: "An error occurred during logout",
      success: false,
    });
  }
};
