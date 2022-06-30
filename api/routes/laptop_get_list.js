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
router.get("/:type",function(req, res) {
    var type_phone=req.params.type;
    var sql="SELECT type,commodity.id,name,low_price,high_price,time,COUNT(shop_commodity.commodityid) as count_shop,time,img_link FROM commodity join shop_commodity ON shop_commodity.commodityid=commodity.id WHERE commodity.type='laptop' AND model='"+type_phone+"' GROUP BY commodity.id,name,low_price,high_price,time,img_link";
    console.log(sql)
    con.query(sql,function(err,result){
        if(err) throw err;
        if(result.lentgh==0){
                res.status(400).send({
                    message:"this prodocts dosent exist",
                    code:400
                })
        }else{
            res.status(200).send({
                message:"successful",
                products:result.map((index)=>{
                    return{
                        id:index.id,
                        name:index.name,
                        low_price:index.price,
                        high_price:index.price,
                        time:index.time,
                        count_shop:index.count_shop,
                        img:index.img_link,
                        low_price:index.low_price,
                        high_price:index.high_price,
                        type:index.type
                    }
                })
            })
        }
    })
});
router.get("/",(req,res)=>{
    var sql="SELECT type,commodity.id,name,low_price,high_price,time,COUNT(shop_commodity.commodityid) as count_shop,time,img_link FROM commodity join shop_commodity ON shop_commodity.commodityid=commodity.id WHERE type='laptop' GROUP BY commodity.id,name,low_price,high_price,time,img_link";
    console.log(sql)
    con.query(sql,function(err,result){
        if(err) throw err;
        if(result.lentgh==0){
                res.status(400).send({
                    message:"this prodocts dosent exist",
                    code:400
                })
        }else{
            res.status(200).send({
                message:"successful",
                products:result.map((index)=>{
                    return{
                        id:index.id,
                        name:index.name,
                        low_price:index.price,
                        high_price:index.price,
                        time:index.time,
                        count_shop:index.count_shop,
                        img_link:index.img_link,
                        low_price:index.low_price,
                        high_price:index.high_price,
                        type:index.type
                    }
                })
            })
        }
    })
})
module.exports = router;