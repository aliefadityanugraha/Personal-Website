/** @format */

"use strict";

module.exports = {
  error404: (req, res) => {
    res.status(404).render("err/404", {
      layout: "layouts/newlayout",
      title: "Error",
    });
  },
};
