/** @format */

"use strict";

const mongoose = require("mongoose");

const post = mongoose.Schema({
  title: String,
  category: {
    type: String,
    default: "Uncategorized",
  },
  author: String,
  image: {
    type: String,
    default: "https://placehold.co/400/png",
  },
  content: String,
  trash: {
    type: Boolean,
    default: false,
  },
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
