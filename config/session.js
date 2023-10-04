/** @format */

const sessions = require("express-session");

const expireSessionIn = 1000 * 60 * 60 * 24;

const sessionConf = sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized: true,
  cookie: { maxAge: expireSessionIn },
  resave: false,
});

module.exports = {
  sessionConf,
};
