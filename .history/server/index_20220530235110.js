require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://DB_USERNAME:DB_PASSWORD@mern-learnit.hk73f.mongodb.net/?retryWrites=true&w=majority`
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

app.use("/api/auth", authRouter);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
