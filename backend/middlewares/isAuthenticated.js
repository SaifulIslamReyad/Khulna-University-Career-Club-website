import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not Authenticated",
        success: false,
      });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.id = decoded.userID;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      console.log("Token has expired.");
      return res.status(401).json({
        message: "Token has expired.",
        success: false,
      });
    } else if (error.name === "JsonWebTokenError") {
      console.log("Invalid token.");
      return res.status(401).json({
        message: "Invalid token.",
        success: false,
      });
    } else {
      console.error("Error in token verification:", error.message);
      return res.status(500).json({
        message: "Failed to authenticate token.",
        success: false,
      });
    }
  }
};
export default isAuthenticated;
