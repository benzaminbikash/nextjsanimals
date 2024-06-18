import jwt from "jsonwebtoken";

export const generateToken = (user: any) => {
  return jwt.sign(user, "thisismysecreatekey", { expiresIn: "2d" });
};

export const verifyToken = (decoded: any) => {
  return jwt.verify(decoded, "thisismysecreatekey");
};
