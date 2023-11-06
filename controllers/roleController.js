/** @format */

"use strict";

const Role = require("../models/roleModel");
const validator = require("validator");

module.exports = {
  insertView: async (req, res) => {
    const role = await Role.find();
    res.status(200).render("role", {
      layout: "layouts/newadminlayout",
      role,
      title: "Role Management",
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
      .then(() => res.redirect("/administrator/insert-role"))
      .catch((err) => console.log(err));
  },
};
