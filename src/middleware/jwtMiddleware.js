import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

export const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.userId = decoded.userId;

    if (!req.userId) {
      return res.status(401).json({ message: "User ID not found in token" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
