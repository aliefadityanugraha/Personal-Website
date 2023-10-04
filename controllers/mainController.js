/** @format */

"use strict";

const Post = require("../models/postModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");

module.exports = {
  home: async (req, res) => {
    const posts = await Post.find().sort({ _id: -1 }).limit(4);
    res.status(200).render("newhome", {
      layout: "layouts/newlayout",
      message: "ok",
      posts,
    });
  },
  account: async (req, res) => {
    const session = req.session;
    const parse = jwt.verify(session.token, jwtConfig.SECRET_KEY);
    const data = await User.findOne({ email: parse.user.email });

    res.status(200).render("account", {
      layout: "layouts/newlayout",
      data,
    });
  },
  ajax: (req, res) => {
    const session = req.session;

    if (!session.token) {
      console.log("ajax reject");
      res.send(false);
    } else {
      const data = jwt.verify(session.token, jwtConfig.SECRET_KEY);
      res.send(data);
    }
  },
};
