const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    conformPassword: {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
      wtimeout: 1000,
    },
  }
);
userSchema.pre("save", async function (next) {
  try {
    const user = this;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
      user.conformPassword = await bcrypt.hash(user.conformPassword, 8);
    }
    next();
  } catch (error) {
    console.log("save Error" + error);
  }
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.secret_KEY);
    this.tokens = this.tokens.concat({
      token: token,
    });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("USER", userSchema);
module.exports = User;
