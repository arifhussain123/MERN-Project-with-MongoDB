const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");
const User = require("./model/userSchema");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(require("./router/auth"));

// app.get("/", (req, res) => {
//   res.send("server route is started and working");
// });
// console.log("server route is started and working");

app.get("/about", (req, res) => {
  res.send("This is server About Pages");
});
app.get("/contact", (req, res) => {
  res.cookie("jwtoken", "arif");

  res.cookie("test", "web develop");
  res.send("This is server Contact Pages");
});

app.get("/profile", (req, res) => {
  res.send("This is baken Profile  Pages");
});

app.get("/login", (req, res) => {
  res.send("This is server Login Pages");
});

app.get("/signup", (req, res) => {
  res.send("This is server Sign Up Pages");
});

app.listen(PORT, () => {
  console.log(`Server port is running ${PORT}`);
  0;
});
