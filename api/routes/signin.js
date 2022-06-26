var express = require("express");
var router = express.Router();
var mysql = require("mysql");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

function generateAccessToken(userId) {
    return jwt.sign(userId, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
  }

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "torob",
  });
con.connect(function (err) {
    if (err) throw err;
  });
router.post("/", function(req, res) {
    var email=req.body.email;
    var password=req.body.password;
    var sql_signin="SELECT * FROM user WHERE email='"+email+"' AND password='"+password+"'";
    con.query(sql_signin,function(err,result){
        if(err) throw err;
        if(result.length==0){
            res.status(400).send({
                message: "email or password is incorrect"
              }); 
        }else{
            const token = generateAccessToken({ userid: req.body.email });
            res.status(200).send({
                token: token,
                message: "successful",
              });
        }
     
    })
});

module.exports = router;