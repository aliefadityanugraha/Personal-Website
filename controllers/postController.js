/** @format */

"use strict";

const Post = require("../models/postModel");
const Category = require("../models/categoryModel");

module.exports = {
  read: async (req, res) => {
    const post = await Post.findOne({ _id: req.params._id });
    res.render("read", {
      layout: "layouts/main-layout",
      post,
    });
  },
  inserView: async (req, res) => {
    const category = await Category.find();
    res.render("insert-post", {
      layout: "layouts/newadminlayout",
      message: "ok",
      category,
    });
  },
  insert: (req, res) => {
    const data = new Post({
      title: req.body.title,
      category: req.body.category,
      author: req.body.author,
      image: req.body.img,
      content: req.body.content,
    });
    data
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => console.log(err));
  },
  edit: async (req, res) => {
    const category = await Category.find();
    const post = await Post.findOne({ _id: req.body._id });
    console.log(post);
  },
};
