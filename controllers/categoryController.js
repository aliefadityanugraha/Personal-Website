/** @format */

"use strict";

const Category = require("../models/categoryModel");

module.exports = {
  insertView: async (req, res) => {
    const category = await Category.find();
    res.status(200).render("category", {
      layout: "layouts/newadminlayout",
      category,
      title: "Category",
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
  edit: async (req, res) => {
    await Category.updateOne(
      { _id: req.body._id },
      {
        category: req.body.category,
        description: req.body.description,
      }
    );
    res.status(200).redirect("/insert-category");
  },
  delete: async (req, res) => {
    await Category.findByIdAndDelete({
      _id: req.params._id,
    }).exec();
    res.status(200).redirect("/insert-category");
  },
};
