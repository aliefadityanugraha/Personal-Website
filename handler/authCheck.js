/** @format */

"use strict";

const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");

module.exports = {
  authCheck: (req, res) => {
    const session = req.session;
    if (!session.token) {
      return false;
    } else {
      const data = jwt.verify(session.token, jwtConfig.SECRET_KEY);
      return data;
    }
  },
};
