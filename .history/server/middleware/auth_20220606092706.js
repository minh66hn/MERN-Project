const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authozization");
  const token = authHeader && authHeader.split(" ")[1];
  if(!token) return res.sendSta
};
