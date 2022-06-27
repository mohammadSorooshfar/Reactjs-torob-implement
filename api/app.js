
var express = require('express');
var signup=require("./routes/signup");
var signin=require("./routes/signin")
var mobile_list=require("./routes/mobile_get_list");
var tablet_list=require("./routes/tablet_get_list");
var laptop_list=require("./routes/laptop_get_list");
var app = express();
app.use(express.json());
app.use("/signup",signup);
app.use("/signin",signin);
app.use("/laptop",laptop_list)
app.use("/tablet",tablet_list)
app.use("/mobile",mobile_list)
module.exports = app;
