/** @format */

"use strict";

const mongoose = require("mongoose");

const category = mongoose.Schema({
  category: String,
  description: String,
  id: Number,
});

module.exports = mongoose.model("Category", category);
