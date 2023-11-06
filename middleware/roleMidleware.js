/** @format */

"use strict";

const Role = require("../models/roleModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");

const isRole = (permission) => {
  return async (req, res, next) => {
    const session = req.session;
    const token = jwt.verify(session.token, jwtConfig.SECRET_KEY);
    const findRole = await Role.find();

    if (permission.includes(token.user.role)) {
      next();
    } else {
      res.redirect("/");
    }
  };
};

module.exports = {
  isRole,
};
