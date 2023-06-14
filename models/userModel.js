/** @format */

"use strict";

const mongoose = require("mongoose");

const user = mongoose.Schema({
  email: String,
  name: String,
  role: {
    type: Number,
    default: 1,
  },
  password: String,
  biography: {
    type: String,
    default: "No Boigraphy",
  },
  profilePicture: {
    type: String,
    default: "https://placehold.co/400/png",
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

module.exports = mongoose.model("User", user);
