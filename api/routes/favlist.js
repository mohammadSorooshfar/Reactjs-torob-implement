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
router.post("/add",authenticateToken,(req,res)=>{
    let commodityid=req.body.commodityid;
    let userid=req.body.userid;
    var date =new Date();
    var time1=date.getTime();
    var sql="INSERT INTO fav_commodity_list (userid,commodityid,time) VALUES ('"+userid+"','"+commodityid+"','"+time1+"')"
    con.query(sql,function(err,result){
        if(err) throw err;
        res.status(200).send({
            message:"کالا با موفقیت به لیست علاقه مندی ها اضافه شد",
            code:200
        })
    })
})
router.delete("/delete",authenticateToken,(req,res)=>{
    let commodityid=req.body.commodityid;
    let userid=req.body.userid;
    var sql="DELETE FROM fav_commodity_list WHERE userid='"+userid+"' AND commodityid='"+commodityid+"'"
    con.query(sql,function(err,result){
        if(err) throw err;
        res.status(200).send({
            message:"کالا با وفقیت از لیست محبوب ها حذف شد",
            code:200
        })
    })
})
router.get("/get",(req,res)=>{
      var userid=req.body.userid;
      var sql="SELECT * FROM fav_commodity_list join commodity on fav_commodity_list.commodityid=commodity.id WHERE fav_commodity_list.userid='"+userid+"'";
      con.query(sql,function(err,result){
        if(err) throw err;
        if(result.length==0){
          res.status(200).send({
            products:[],
            code:200
          })
        }else{
          res.status(200).send({
            products:result.map((index)=>{
              return{
                 name:index.name,
                 imglink:index.img_link,
                 low_price:index.low_price,
                 high_price:index.high_price,
                 productid:index.commodityid

              }
            })
          })
        }
      })
})
module.exports = router;