const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("this my route index pages");
});
{
  // router.post("/register",  (req, res) => {
  //   const { name, email, phone, work, password, conformPassword } = req.body;
  //   if (!name || !email || !phone || !work || !password || !conformPassword) {
  //     return res.status(422).json({ error: "please fill all field " });
  //   }
  //   User.findOne({ email: email })
  //     .then((UserExit) => {
  //       if (UserExit) {
  //         return res.status(422).json({ error: "eamil Already exit" });
  //       }
  //       const user = new User({
  //         name,
  //         email,
  //         phone,
  //         work,
  //         password,
  //         conformPassword,
  //       });
  //       user
  //         .save()
  //         .then(() => {
  //           res.status(201).json({ mesage: "user successfuly registered" });
  //         })
  //         .catch((error) =>
  //           res
  //             .status(500)
  //             .json({ error: " registration has been failed please check " })
  //         );
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
}
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, conformPassword } = req.body;

  if (!name || !email || !phone || !work || !password || !conformPassword) {
    return res.status(422).json({ error: "please fill all field " });
  }

  try {
    const UserExit = await User.findOne({ email: email });
    if (UserExit) {
      return res.status(422).json({ error: "eamil Already exit" });
    } else if (password !== conformPassword) {
      return res.status(422).json({ error: "conformed password not match" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        conformPassword,
      });
      const userRegister = await user.save();
      if (userRegister) {
        res.status(201).json({ mesage: "user successfuly registered" });
      } else {
        res
          .status(500)
          .json({ error: " registration has been failed please check " });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

// Login Router

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "please fill correct data",
      });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      // console.log("my token => " + token);

      res.cookie("jwtoken", token, {
        expire: new Date(Date.now() + 25899200000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "invalied user" });
      } else {
        res.json({ message: "user successfuly login" });
      }
    } else {
      res.status(400).json({ error: "invalied user" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
