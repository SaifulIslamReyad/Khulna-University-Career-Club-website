import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
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
    const cvFile = req.file; // Access uploaded file information
    if (!cvFile) {
      return res.status(400).json({
        message: "CV is required",
        success: false,
      });
    }

    // Save CV file path in the database (if applicable)
    const cvPath = cvFile ? cvFile.path : "";
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
      cv: cvPath,
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
    generateToken(res, user, `Welcome ${user.name}`);
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
    return res.status(200).cookie("token", null, { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to logout",
      success: false,
    });
  }
};
