/** @format */

"use strict";

const cloudinary = require("../handler/cloudinary");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");
const User = require("../models/userModel");
var validator = require("validator");

module.exports = {
  uploadProfile: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        width: 500,
        height: 500,
        crop: "limit",
        quality: 50,
      });
      const session = req.session;
      const data = jwt.verify(session.token, jwtConfig.SECRET_KEY);
      await User.updateOne(
        { email: data.user.email },
        {
          profilePicture: result.secure_url,
        }
      );
      res.status(200).redirect("/account");
    } catch (err) {
      console.log(err);
    }
  },
  editAccount: async (req, res) => {
    if (validator.isEmail(req.body.email)) {
      await User.updateOne(
        { email: req.body.email },
        {
          name: req.body.name,
          biography: req.body.biography,
        }
      );
      res.status(200).redirect("/account");
    }
  },
};
