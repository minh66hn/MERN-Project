const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const User = require("../models/User");

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
    try {
      //check for existing user
      const user = await User.findOne({ username: username });
      if (user)
        return res
          .status(400)
          .json({ success: false, message: "username already taken" });
        //all good
        const
    } catch (error) {}
  }
});

module.exports = router;
