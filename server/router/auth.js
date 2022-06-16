const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Router is started and working");
  console.log("Router is started and working");
});

// through Promiss
// may na register to delete kia our signUp Likha ha

// router.post("/signUp", (req, res) => {
//   const { name, email, phone, work, password, cPassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cPassword) {
//     return res.status(422).json({ error: "Please fill all the fields" });
//   }
//   User.findOne({ email: email })
//     .then((userExit) => {
//       if (userExit) {
//         return res.status(422).json({ error: "Email already exist" });
//       }
//       const user = new User({ name, email, phone, work, password, cPassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User is created successfully" });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: err.message });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// through Async
// +++++++++++++SignUp Proecess-------------

// may na register to delete kia our signUp Likha ha

router.post("/signUp", async (req, res) => {
  const { name, email, phone, work, password, cPassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cPassword) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }
  try {
    const userExit = await User.findOne({ email: email });
    if (userExit) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password !== cPassword) {
      return res.status(422).json({ error: "Password is not match" });
    } else {
      const user = new User({ name, email, phone, work, password, cPassword });

      await user.save();
      res
        .status(201)
        .json({ message: "User is created / registred successfully" });
    }
  } catch (error) {
    console.log(err);
  }
});

// +++++++++++++LogIn Proecess-------------
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    const userLogin = await User.findOne({ email: email });
    console.log("userLogin==>" + userLogin);
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log("Log In Token" + token);
      res.cookie("jwtoken", token);
      expires: new Date(Date.now() + 360);
      httpOnly: true;

      if (!isMatch) {
        return res
          .status(400)
          .json({ error: "Invalied Credientials data " });
      } else {
        res.json({ message: "User is successfuly LogIn" });
      }
    } else {
      return res
        .status(400)
        .json({ error: "Invalied Credientials data " });
    }
  } catch (error) {
    console.log(error);
  }
});

// ----------About----------
router.get("/about", authenticate, (req, res) => {
  console.log("This is server About Pages");
  res.send(req.rootUser);
});

module.exports = router;
