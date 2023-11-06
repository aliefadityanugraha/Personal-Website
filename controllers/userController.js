/** @format */

"use strict";

const User = require("../models/userModel");
const jwtConfig = require("../config/jwt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const getHashedPassword = (password) => {
  const sha256 = crypto.createHash("sha256");
  const hash = sha256.update(password).digest("base64");
  return hash;
};

module.exports = {
  login: (req, res) => {
    res.status(200).render("login", {
      layout: "layouts/authlayout",
      message: req.flash("message"),
      title: "Login",
    });
  },
  signUp: (req, res) => {
    res.status(200).render("signup", {
      layout: "layouts/authlayout",
      message: req.flash("message"),
      title: "Sign Up",
    });
  },
  auth: (req, res) => {
    res.status(200).render("auth", {
      layout: "layouts/landing-page",
    });
  },
  save: async (req, res) => {
    if (req.body.password === req.body.cpassword) {
      const query = await User.find({ email: req.body.email }).exec();
      if (query.length === 0) {
        const data = new User({
          email: req.body.email,
          name: "Unknown",
          role: 1,
          password: getHashedPassword(req.body.password),
          biography: "-",
        });
        await data
          .save()
          .then(() => {
            req.flash(
              "message",
              "Sign Up Success. Please Login into your account"
            );
            res.status(200).redirect("/auth/login");
          })
          .catch((err) => console.log(err));
      } else {
        console.log("User is Alredy Exist");
        req.flash("message", "User is Alredy Exist");
        res.status(200).redirect("/auth/signup");
      }
    } else {
      console.log("Password Not Match");
      req.flash("message", "Password Not Match");
      res.status(200).redirect("/auth/signup");
    }
  },
  authetication: async (req, res) => {
    const hashedPassword = getHashedPassword(req.body.password);
    const query = await User.find({ email: req.body.email }).exec();

    if (query.length === 1) {
      if (hashedPassword === query[0].password) {
        const token = jwt.sign(
          {
            user: {
              email: query[0].email,
              name: query[0].name,
              profilePicture: query[0].profilePicture,
              role: query[0].role,
              biography: "-",
            },
          },
          jwtConfig.SECRET_KEY
        );
        const session = req.session;
        session.token = token;
        res.status(200).redirect("/");
      } else {
        req.flash("message", "Password not match");
        res.status(200).redirect("/auth/login");
      }
    } else {
      req.flash("message", "User not Found");
      res.status(200).redirect("/auth/login");
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.status(200).redirect("/");
  },
  changePassword: async (req, res) => {
    const findUser = await User.findOne({ email: req.body.email });

    if (findUser.password === getHashedPassword(req.body.oldPassword)) {
      await User.updateOne(
        { email: req.body.email },
        { password: getHashedPassword(req.body.newPassword) }
      );
      req.flash("message", "Change Password Sucessfully");
      res.status(200).redirect("/account");
    } else {
      req.flash(
        "message",
        "Your Old Password Doest Match with your Password now"
      );
      res.status(200).redirect("/account");
    }
  },
  deleteAccount: async (req, res) => {
    await User.deleteOne({ email: req.body.email });
    res.status(200).redirect("/");
  },
};
