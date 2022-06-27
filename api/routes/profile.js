var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "torob",
  });
con.connect(function (err) {
    if (err) throw err;
  });
  const jwt = require('jsonwebtoken');
  const dotenv = require('dotenv');
  dotenv.config();
  process.env.TOKEN_SECRET;
  function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
   
    if (token == null) return res.sendStatus(401);
  
      jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
 
  
      if (err) return res.sendStatus(403);
  
      req.user = user;
  
      next();
    });
  }
router.put("/", authenticateToken,function(req, res) {
    var email=req.body.email;
    var Oldusername=req.body.oldusername;
    var Newusername=req.body.newusername;
    var phone_number=req.body.number;
    var sql="SELECT * FROM user where username='"+Newusername+"'";

    con.query(sql,function(err,result){
      if(err) throw err;
      if(result.length!=0){
        res.status(400).send({
          message:"this username alredy exist",
          code:400
        })
      }else{
        sql="UPDATE user SET email='"+email+"',username='"+Newusername+"',phone_number='"+phone_number+"' where username='"+Oldusername+"'";
        console.log(sql);
        con.query(sql,function(err,result){
          if(err) throw err;
          res.status(200).send({
            message:"Changes made successfully",
            code:200
          })
        })
      }
    })

  
});

module.exports = router;