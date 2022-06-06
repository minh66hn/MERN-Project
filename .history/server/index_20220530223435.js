const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 1234;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
