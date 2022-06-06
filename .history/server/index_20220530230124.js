const express = require("express");
const mongoose = require('mongoose');

const connectDB = as
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
