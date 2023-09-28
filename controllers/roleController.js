/** @format */

"use strict";

const Role = require("../models/roleModel");

module.exports = {
  insertView: async (req, res) => {
    const role = await Role.find();
    res.render("role", {
      layout: "layouts/newadminlayout",
      role,
    });
  },
  insert: async (req, res) => {
    const data = new Role({
      role: req.body.role,
      roleId: req.body.roleId,
      description: req.body.description,
    });
    data
      .save()
      .then(() => res.redirect("/insert-role"))
      .catch((err) => console.log(err));
  },
};
