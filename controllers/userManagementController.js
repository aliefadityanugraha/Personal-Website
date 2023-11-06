/** @format */

"use strict";

const User = require("../models/userModel");

module.exports = {
  userManagementView: async (req, res) => {
    const data = await User.find();
    res.status(200).render("userManagement", {
      layout: "layouts/newadminlayout",
      data,
      title: "User Management",
    });
  },
};
