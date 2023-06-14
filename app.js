/** @format */

"use strict";

const express = require("express");
const mongoose = require("./config/mongose");
const sessionConfig = require("./config/session");

const app = express();

const path = require("path");
const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const multer = require("./config/multer");

const routerV1 = require("./routes/v1");
const routerV2 = require("./routes/v2");

app.use(sessionConfig.sessionConf);
var session;
app.use(multer);
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use("/", routerV1);
app.use("/", routerV2);

module.exports = app;
