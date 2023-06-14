/** @format */

"use strict";

const Role = require("../models/roleModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");

module.exports = {
  isAdmin: (req, res, next) => {
    const session = req.session;
    const token = jwt.verify(session.token, jwtConfig.SECRET_KEY);
    if (token.user.role === 2) {
      next();
    } else {
      res.redirect("/");
    }
  },
};
