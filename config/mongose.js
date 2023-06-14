/** @format */

"use strict";

var mongoose = require("mongoose");

const uri =
  "mongodb+srv://aliefadityanugraha:ykXmjoXf63EDMKKH@clusterdb.z4uuokm.mongodb.net/aliefaditya?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database in MongoDB server..."))
  .catch((error) => {
    console.log(error);
    console.log("Connection to database error. Check error information");
    process.exit();
  });
