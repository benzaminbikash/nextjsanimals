import jwt from "jsonwebtoken";

export const generateToken = (user: any) => {
  const token = jwt.sign({ _id: user._id }, "thisismyseacreateforjwt", {
    expiresIn: "2d",
  });
  return token;
};
interface JwtPayload {
  _id: string;
}

export const verifyToken = (decoded: string) => {
  try {
    const data = jwt.verify(decoded, "thisismyseacreateforjwt") as JwtPayload;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
