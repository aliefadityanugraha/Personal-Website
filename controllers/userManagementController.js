/** @format */

"use strict";

const User = require("../models/userModel");
const Role = require("../models/roleModel");

module.exports = {
  userManagementView: async (req, res) => {
    const users = await User.find();
    const roles = await Role.find();
    res.status(200).render("userManagement", {
      layout: "layouts/newadminlayout",
      users,
      roles,
      title: "User Management",
    });
  },
  editPermission: async (req, res) => {
    await User.updateOne(
      { _id: req.body._id },
      {
        role: req.body.role,
        status: req.body.status,
      }
    );
    res.status(200).redirect("/administrator/user-management");
  },
};
