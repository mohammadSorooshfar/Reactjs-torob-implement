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


router.post("/normal/add",authenticateToken,(req,res)=>{
    var report1=req.body.report1;
    var report2=req.body.report2;
    var commodityid=req.body.commodityid;
    var shopid=req.body.shopid;
    var sql="INSERT INTO commodity_report (report1,report2,commodityid,shopid) VALUES ('"+report1+"','"+report2+"','"+commodityid+"','"+shopid+"')";
    console.log(sql)
    con.query(sql,function(err,result){
        if(err) throw err;
        res.status(200).send({
          message:"گزارش با موفقیت ارسال شد",
          code:200
        })
    })
})
router.get("/shop/getlist/:shopid",authenticateToken,(req,res)=>{
        var shopid=req.params.shopid;
        var sql="SELECT commodity_report.id as id,report1,report2,name,img_link,model,type FROM commodity_report JOIN commodity ON commodity.id=commodity_report.commodityid WHERE shopid='"+shopid+"'";
        con.query(sql,function(err,result){
                if(err) throw err;
                res.status(200).send({
                    reports:result.map((index)=>{
                        return{
                            id:index.id,
                            report1:index.report1,
                            report2:index.report2,
                            name:index.name,
                            imglink:index.imglink,
                            model:index.model,
                            type:index.type
                        }
                    })
                })
        })
})
module.exports = router;