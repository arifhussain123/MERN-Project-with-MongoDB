const mongoose = require("mongoose");
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is successfully connected");
  })
  .catch((err) => {
    console.log("MongoDB is not connected plese check Error " + err);
  });