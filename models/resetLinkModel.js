/** @format */

"use strict";

const mongoose = require("mongoose");

const resetLink = mongoose.Schema({
  email: String,
  randomValue: String,
  shareLink: String,
  send: Boolean,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Reset Link", resetLink);
