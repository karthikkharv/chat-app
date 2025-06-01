import jwt from "jsonwebtoken";
const generateTokenAndSetCookie = (userId, res) => {
  let JWT_SECRET = "123344"
  console.log(JWT_SECRET)
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 1000, // miliseconds
    httpOnly: true, // prevent XSS attacks
    sameSite: "strict", // prevent CSRF attacks
    secure: process.env.NODE_ENV !== "development",
  });
};
// generateTokenAndSetCookie(1,2)
export default generateTokenAndSetCookie;
