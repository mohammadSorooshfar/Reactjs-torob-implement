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

router.get("/:searchword",(req,res)=>{
    var searchword=req.params.searchword;
    var sql="SELECT * FROM commodity WHERE name LIKE '%"+searchword+"%' OR model like '%"+searchword+"%'";
    con.query(sql,function(err,result){
        if(err) throw err;
        if(result.length==0){
                res.send({
                    message:"no result for search"
                })
        }else{
                res.status(200).send({
                    products:result.map((index)=>{
                            return{
                                name:index.name,
                                id:index.id,
                                model:index.model,
                                type:index.type,
                                time:index.time,
                                img_link:index.img_link,
                                low_price:index.low_price,
                                high_price:index.high_price,
                                
                            }
                    })
                })
        }
    })
})

module.exports = router;