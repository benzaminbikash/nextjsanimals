import jwt from "jsonwebtoken";

export const generateToken = (user: any) => {
  return jwt.sign(user, process.env.JWT_SECRET as string, { expiresIn: "2d" });
};

export const verifyToken = (decoded: any) => {
  return jwt.verify(decoded, process.env.JWT_SECRET as string);
};
