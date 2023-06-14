/** @format */

"use strict";

var mongoose = require("mongoose");
const Url = require("./urlMongodb");

const uri = Url;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database in MongoDB server..."))
  .catch((error) => {
    console.log(error);
    console.log("Connection to database error. Check error information");
    process.exit();
  });
