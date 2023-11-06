/** @format */

"use strict";

const User = require("../models/userModel");
const Post = require("../models/postModel");
const Category = require("../models/categoryModel");
const Role = require("../models/roleModel");

module.exports = {
  dashboard: async (req, res) => {
    const data = {
      user: await User.find(),
      post: await Post.find(),
      category: await Category.find(),
      role: await Role.find(),
    };
    res.status(200).render("admin/dashboard", {
      layout: "layouts/newadminlayout",
      data,
      title: "Admin",
    });
  },
};
