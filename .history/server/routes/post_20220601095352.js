const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.post("/", async (req, res) => {
  const { title, description, url, status } = req.body;

  // simple validation
  if (!title) {
    return res
      .status(400)
      .json({ success: false, message: "Title is required" });
  }

  try {
    const newPost = new Post({
      title,
      description,
      url: url.startsWith("http") ? url : `http://${url}`,
      status: status || "TO LEARN",
    });
    await newPost.save();
    res.json({ success: true, message: "Post created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internet error" });
  }
});
// @route POST api/auth/post
// @desc create post
// @access private
module.exports = router;