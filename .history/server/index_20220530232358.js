const express = require("express");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://minh66hn:1508@mern-learnit.hk73f.mongodb.net/?retryWrites=true&w=majority`
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

app.use("/api/auth",);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
