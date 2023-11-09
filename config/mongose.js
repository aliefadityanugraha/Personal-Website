/** @format */

"use strict";

var mongoose = require("mongoose");
const url = require("./urlMongodb");

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database in MongoDB cloud..."))
  .catch((error) => {
    console.log(error);
    console.log("Connection to database error. Check error information");
    process.exit();
  });
