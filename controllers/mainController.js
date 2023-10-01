/** @format */

"use strict";

const Post = require("../models/postModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");

module.exports = {
  home: async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(4);
    res.render("newhome", {
      layout: "layouts/newlayout",
      message: "ok",
      posts,
    });
  },
  account: async (req, res) => {
    const session = req.session;
    const parse = jwt.verify(session.token, jwtConfig.SECRET_KEY);
    const data = await User.findOne({ email: parse.user.email });
    res.render("account", {
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
