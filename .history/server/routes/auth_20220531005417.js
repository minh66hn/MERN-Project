const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
import 'dotenv/config';
// @route POST api/auth/register
// @desc Register user
// @access Public

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  //Simple validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });
  }
  try {
    //check for existing user
    const user = await User.findOne({ username: username });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "username already taken" });
    //all good
    //create new user with password hash
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      username: username,
      password: hashedPassword,
    });
    await newUser.save();

    //return jsonwebtoken
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({ success: true, mesage: "register success", accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internet error" });
  }
});

// @route POST api/auth/login
// @desc Register user
// @access Public
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //simple validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });
  }

  try {
    //Check for existing user
    const user = await User.findOne({ username: username });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect Username" });
    }
    //Username found

    //Check password user.password in db and password from request
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect Password" });
    }

    //all good, send jsonwebtoken
    //return jsonwebtoken

    console.log(process.env.ACCESS_TOKEN_SECRET)
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({ success: true, mesage: "User Logged success", accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internet password" });
  }
});

module.exports = router;
