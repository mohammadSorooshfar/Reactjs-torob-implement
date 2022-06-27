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
router.post("/", function(req, res) {
    var email=req.body.email;
    var password=req.body.password;
    var username=req.body.username;
    var role=req.body.role;
    var sql_check_exist_username="SELECT * FROM user WHERE username='"+username+"'"
    con.query(sql_check_exist_username,function(err,result){
        if(err) throw err;
        if(result.length!=0){
            res.status(400).send({
                message:"this username alredy exist",
                code:400
            })
        }else{
           if(!password.length>=8){
            res.status(400).send({
                message:"The password must be at least 8 characters long",
                code:400
            })
           }else if(!password.match("[A-Z]+")){
            res.status(400).send({
                message:"The password must have at least a capitall letter",
                code:400
            })
           }else if(!password.match("[a-z]+")){
            res.status(400).send({
                message:"The password must have at least a small letter",
                code:400
            })
           }else if(!password.match("[0-9]+")){
            res.status(400).send({
                message:"The password must have at least a number",
                code:400
            })
           }else{
                var sql_insert_user="INSERT INTO user (email,username,password,type) VALUES ('"+email+"','"+username+"','"+password+"','"+role+"')";
                //console.log(sql_insert_user)
                
                con.query(sql_insert_user,function(err,result){
                    if(err) throw err;
                    res.send({
                        message:"user successfully signup",
                        code:200
                    })
                })
           }
           
        }
    })

   
});

module.exports = router;