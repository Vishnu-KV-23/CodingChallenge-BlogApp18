const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://vishnu:vishnu@cluster0.hj3xm0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("DB connection error:", error);
  });
