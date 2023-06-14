/** @format */

"use strict";

module.exports = {
  error404: (req, res) => {
    res.render("err/404", {
      layout: "layouts/main-layout",
    });
  },
};
