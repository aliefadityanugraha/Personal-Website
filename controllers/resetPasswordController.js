/** @format */

"use strict";

const User = require("../models/userModel");
const SendMail = require("../handler/sendMail");
const ResetLink = require("../models/resetLinkModel");
const { generateRandomValue } = require("../handler/generateRandomValue");

module.exports = {
  resetLinkView: (req, res) => {
    res.status(200).render("resetLink", {
      layout: "layouts/authlayout",
      message: req.flash("message"),
      title: "Reset Password",
    });
  },
  sendMail: async (req, res) => {
    const query = await User.find({ email: req.body.email });
    if (query.length === 0) {
      req.flash("message", "Your Email Not Registered");
      res.status(200).redirect("/auth/get-reset-password");
    } else {
      const randomValue = generateRandomValue(40);
      const shareLink = `${req.protocol}://${req.get(
        "host"
      )}/auth/reset/${randomValue}`;

      await SendMail(req.body.email, shareLink);

      const insertData = new ResetLink({
        email: req.body.email,
        randomValue: randomValue,
        shareLink: shareLink,
        send: true,
      });

      await insertData
        .save()
        .then(() => {
          req.flash("message", "Reset Link Send to You");
          res.status(200).redirect("/auth/get-reset-password");
        })
        .catch((err) => console.log(err));
    }
  },
};
