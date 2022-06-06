const express = require("express");
const mongoose = require('mongoose');

const connectDB = async()=>{
   try{

   }catch(error){
       
   }
}
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
