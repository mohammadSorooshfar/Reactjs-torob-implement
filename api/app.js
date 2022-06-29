
var express = require('express');
var cors = require("cors");
var signup=require("./routes/signup");
var signin=require("./routes/signin")
var mobile_list=require("./routes/mobile_get_list");
var tablet_list=require("./routes/tablet_get_list");
var laptop_list=require("./routes/laptop_get_list");
var profile=require("./routes/profile");
var favlist=require("./routes/favlist")
var app = express();
app.use(express.json());
app.use(cors());
app.use("/profile",profile);
app.use("/signup",signup);
app.use("/signin",signin);
app.use("/laptop",laptop_list)
app.use("/tablet",tablet_list)
app.use("/mobile",mobile_list)
app.use("/favlist",favlist)
module.exports = app;
