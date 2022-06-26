
var express = require('express');
var signup=require("./routes/signup");
var app = express();
app.use(express.json());
app.use("/signup",signup);
module.exports = app;
