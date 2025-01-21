import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res.status(401).json({ message: "Unauthorized", success: false });
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    if (!verified)
      return res.status(401).json({ message: "Unauthorized", success: false });
    req.id = verified.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};
export default isAuthenticated;
