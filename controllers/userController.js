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
      layout: "layouts/newlayout",
    });
  },
  signUp: (req, res) => {
    res.status(200).render("signup", {
      layout: "layouts/newlayout",
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
          name: "jono",
          role: 1,
          password: getHashedPassword(req.body.password),
          biography: "-",
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
        res.redirect("/");
      } else {
        res.status(200).send("Password not match");
      }
    } else {
      res.status(200).send("User Not Found");
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  },
};
