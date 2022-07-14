require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const cors = require('cors')
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learnit.hk73f.mongodb.net/?retryWrites=true&w=majority`
      //   {
      //     useCreateIndex: true,
      //     useNewUrlParser: true,
      //     useUnifiedTopology: true,
      //     useFindAndModify: false
      //   }
    );
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();

const app = express();

//read data in body
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
