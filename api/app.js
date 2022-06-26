
var express = require('express');
var signup=require("./routes/signup");
var signin=require("./routes/signin")
var app = express();
app.use(express.json());
app.use("/signup",signup);
app.use("/signin",signin)
module.exports = app;
