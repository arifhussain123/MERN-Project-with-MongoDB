const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose
  .connect(
    DB,
    ("mongodb://127.0.0.1:27017/cinema", { useNewUrlParser: true }),
    { useNewUrlParser: true },
    { useunifiedtopology: true }
  )
  .then(() => {
    console.log("Successfuly Mogoose db is Connected");
  })
  .catch((error) => {
    console.log("mogodb not connected check your db connection  " + "" + error);
  });
