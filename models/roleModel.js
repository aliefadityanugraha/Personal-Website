/** @format */
"use strict";

const mongoose = require("mongoose");

const role = new mongoose.Schema({
  role: String,
  roleId: Number,
  description: String,
});

module.exports = mongoose.model("Role", role);
