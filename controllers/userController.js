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
    res.render("login", {
      layout: "layouts/main-layout",
    });
  },
  signUp: (req, res) => {
    res.render("signup", {
      layout: "layouts/main-layout",
    });
  },
  auth: (req, res) => {
    res.render("auth", {
      layout: "layouts/landing-page",
    });
  },
  save: async (req, res) => {
    if (req.body.password === req.body.cpassword) {
      const query = await User.find({ email: req.body.email }).exec();
      if (query.length === 0) {
        const data = new User({
          email: req.body.email,
          name: "jono",
          role: 1,
          password: getHashedPassword(req.body.password),
          biography: "no biography",
        });
        data
          .save()
          .then(() => res.redirect("/login"))
          .catch((err) => console.log(err));
      } else {
        console.log("Found Match");
        res.redirect("/");
      }
    }
  },
  authetication: async (req, res) => {
    const hashedPass = getHashedPassword(req.body.password);
    const query = await User.find({ email: req.body.email }).exec();

    if (query.length === 1) {
      if (hashedPass === query[0].password) {
        const token = jwt.sign(
          {
            user: {
              email: query[0].email,
              name: query[0].name,
              profilePicture: query[0].profilePicture,
              role: query[0].role,
              biography: "no biography",
            },
          },
          jwtConfig.SECRET_KEY
        );
        const session = req.session;
        session.token = token;
        res.redirect("/");
      } else {
        res.send("Password not match");
      }
    } else {
      res.send("User Not Found");
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  },
};
