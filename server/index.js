const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json());
const User = require("./model/userSchema");
app.use(require("./router/auth"));
const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("visit my page and middleware run");
  next();
};

app.get("/about", middleware, (req, res) => {
  res.send("This is About Pages");
});
app.get("/contact", (req, res) => {
  res.cookie("test", 'web develop')
  res.send("This is Contact Pages");
});
app.get("/profile", (req, res) => {
  res.send("This is Profile  Pages");
});
app.get("/login", (req, res) => {
  res.send("This is Login Pagesd");
});
app.get("/signup", (req, res) => {
  res.send("This Sign Up Pages");
});
console.log("MERN Project");
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
