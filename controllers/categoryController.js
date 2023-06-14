/** @format */

"use strict";

const Category = require("../models/categoryModel");

module.exports = {
  insertView: async (req, res) => {
    const category = await Category.find();
    res.render("category", {
      layout: "layouts/main-layout",
      category,
    });
  },
  insert: async (req, res) => {
    const data = new Category({
      category: req.body.category,
      description: req.body.description,
    });
    data
      .save()
      .then(() => res.redirect("/insert-category"))
      .catch((err) => console.log(err));
  },
};
