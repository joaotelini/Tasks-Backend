import jwt from "jsonwebtoken";

const secret = process.env.SECRET;
if (!secret) {
  throw new Error("JWT secret is not defined in environment variables");
}

export const jwtMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Bearer token not found in header" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, secret);

    // Usa userId pois foi criado assim no token
    req.userId = decoded.userId;

    if (!req.userId) {
      return res.status(401).json({ message: "User ID not found in token" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
