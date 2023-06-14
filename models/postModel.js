/** @format */

"use strict";

const mongoose = require("mongoose");

const post = mongoose.Schema({
  title: String,
  category: String,
  author: String,
  image: {
    type: String,
    default: "https://placehold.co/400/png",
  },
  content: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", post);
