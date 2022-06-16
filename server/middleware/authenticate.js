const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async () => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error();
    }
    req.token = token;
    req.user = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    // console.log(error);
    // res.status(401).send("Unauthorized tokens");
  }
};

module.exports = Authenticate;
// Compare this snippet from server\router\auth.js: