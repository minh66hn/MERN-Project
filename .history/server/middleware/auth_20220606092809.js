const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authozization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ succes: false, message: "No token, authorization denied" });

  try {
      const decoded =
  } catch (err) {}
};
